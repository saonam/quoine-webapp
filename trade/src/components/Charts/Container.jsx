import React from 'react';
import Cryptowatch from 'cryptowatch-embed';

import View from './View';
import schemes from './schemes';

const getChartName = (product) => {
  switch (product) {
    // Bitmex products
    case 'XBJ24H': return 'xbj-daily-futures';
    // QUOINE products
    // BTCUSD => btcusd
    default: return product.toLowerCase();
  }
};
const getLanguage = (language) => {
  switch (language) {
    case 'ja': return 'ja-JP';
    case 'en':
    default: return 'en';
  }
};

class Charts extends React.PureComponent {
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
    const { product, language, market, theme, double } = this.props;
    // prepare element
    const primaryNode = document.querySelector('#primary-chart');
    const secondaryNode = document.querySelector('#secondary-chart');

    // build
    const origin = market === 'futures' ? 'bitmex' : 'quoine';
    const name = getChartName(product);
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
      primaryNode.innerHTML = '';
      chart.mount('#primary-chart');
      if (double) {
        secondaryNode.innerHTML = '';
        chart.mount('#secondary-chart');
      }
    } catch (e) {
      this.error = true;
    }
  }
  render() {
    const { double, grow } = this.props;
    return (
      <View error={this.error} double={double} grow={grow} />
    );
  }
}

Charts.propTypes = {
  product: React.PropTypes.string.isRequired,
  market: React.PropTypes.string.isRequired,
  theme: React.PropTypes.string.isRequired,
  language: React.PropTypes.string.isRequired,
  double: React.PropTypes.bool.isRequired,
  // ===
  grow: React.PropTypes.number.isRequired,
};

export default Charts;
