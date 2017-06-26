import PropTypes from 'prop-types';
import React from 'react';
import Cryptowatch from 'cryptowatch-embed';

import View from './View';
import schemes from './schemes';
import { getOrigin, getChartName, getLanguage } from './utils';

class ChartsCryptoWatch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mountChart = this.mountChart.bind(this);
    this.error = false;
  }
  componentDidMount() { this.mountChart(); }
  componentDidUpdate() { this.mountChart(); }
  mountChart() {
    const { id, product, market, theme, language } = this.props;

    // build
    const origin = getOrigin(market);
    const name = getChartName(product.symbol);

    const options = {
      host: 'quoine.embed.cryptowat.ch',
      locale: getLanguage(language),
      height: '100%',
      width: '100%',
      customColorScheme: schemes[theme],
      query: {
        branding: process.env.REACT_APP_VENDOR,
      },
    };
    try {
      const chart = new Cryptowatch(origin, name, options);
      // mount
      document.querySelector(`#${id}`).innerHTML = '';
      chart.mount(`#${id}`);
    } catch (e) {
      this.error = true;
    }
  }
  render() {
    return (
      <View error={this.error} id={this.props.id} />
    );
  }
}

ChartsCryptoWatch.propTypes = {
  id: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
  market: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default ChartsCryptoWatch;
