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
  position: React.PropTypes.shape({
    priceOpen: React.PropTypes.number.isRequired,
    priceClose: React.PropTypes.number.isRequired,
    priceMark: React.PropTypes.number,
    priceLiquidation: React.PropTypes.number,
    quoteCurrency: React.PropTypes.string.isRequired,
  }).isRequired,
  type: React.PropTypes.oneOf(['open', 'close', 'mark', 'liquidation']).isRequired,
};

export default PositionPrice;
