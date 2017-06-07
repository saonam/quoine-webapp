import PropTypes from 'prop-types';
import React from 'react';
import Cryptowatch from 'cryptowatch-embed';

import View from './View';
import schemes from './schemes';

const getChartName = (symbol) => {
  switch (symbol) {
    // Bitmex symbols
    case 'XBJH17': return '';
    // QUOINE symbols
    // BTCUSD => btcusd
    default: return symbol.toLowerCase();
  }
};
const getLanguage = (language) => {
  switch (language) {
    case 'ja': return 'ja-JP';
    case 'en':
    default: return 'en';
  }
};

class ChartsCryptoWatch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.mountChart = this.mountChart.bind(this);
    this.name = '';
    this.error = false;
  }
  componentDidMount() { this.mountChart(); }
  componentWillReceiveProps(nextProps) {
    this.name = getChartName(nextProps.product);
  }
  componentDidUpdate() { this.mountChart(); }
  mountChart() {
    const { id, product, market, theme, language } = this.props;

    // build
    const origin = market === 'futures' ? 'bitmex' : 'quoine';
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
