import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const getValueKey = (type) => {
  switch (type) {
    case 'open': return 'Open';
    case 'close': return 'Close';
    case 'mark': return 'Mark';
    case 'liquidation': return 'Liquidation';
    default: return '';
  }
};

const PositionPrice = ({ position, type }) => {
  const value = position[`price${getValueKey(type)}`];
  return (
    <ColorFlashing value={value}>
      <Money value={value} currency={position.quoteCurrency} />
    </ColorFlashing>
  );
};

PositionPrice.propTypes = {
  position: PropTypes.shape({
    priceOpen: PropTypes.number.isRequired,
    priceClose: PropTypes.number.isRequired,
    priceMark: PropTypes.number,
    priceLiquidation: PropTypes.number,
    quoteCurrency: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['open', 'close', 'mark', 'liquidation']).isRequired,
};

export default PositionPrice;
