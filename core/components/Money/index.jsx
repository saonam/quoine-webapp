import PropTypes from 'prop-types';
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
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  currency: PropTypes.string.isRequired,
  noSymbol: PropTypes.bool,
  noDecimal: PropTypes.bool,
};

export default Money;
