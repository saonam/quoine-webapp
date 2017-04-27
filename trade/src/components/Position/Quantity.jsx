import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const getValueKey = (type) => {
  switch (type) {
    case 'open': return 'Open';
    case 'close': return 'Close';
    default: return '';
  }
};

const PositionQuantity = ({ position, type }) => {
  const value = position[`quantity${getValueKey(type)}`];
  return (
    <ColorFlashing value={value}>
      {value ? (
        <Money value={value} currency={position.baseCurrency} />
      ) : <span>–</span>}
    </ColorFlashing>
  );
};

PositionQuantity.propTypes = {
  position: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    baseCurrency: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['open', 'close']),
};

export default PositionQuantity;
