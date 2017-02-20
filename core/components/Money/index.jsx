import React from 'react';

import format from './format';

import View from './View';

const getWhole = (string) => {
  const dotIndex = string.indexOf('.');
  if (dotIndex === -1) { return string; }
  return string.slice(0, dotIndex);
};

class Money extends React.PureComponent {
  render() {
    const { value, currency, noSymbol, noDecimal } = this.props;
    // ===
    const result = format(value, currency, noSymbol);
    const significant = noDecimal ? getWhole(result[0]) : result[0];
    // if no decimal then zeros is no sense
    const zeros = noDecimal ? null : result[1];
    // raw is to show highest precision value on hover
    const [raw] = format(value, 'full');
    return (
      <View significant={significant} zeros={zeros} raw={raw} />
    );
  }
}

Money.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]).isRequired,
  currency: React.PropTypes.string.isRequired,
  noSymbol: React.PropTypes.bool,
  noDecimal: React.PropTypes.bool,
};

export default Money;
