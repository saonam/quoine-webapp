import PropTypes from 'prop-types';
import React from 'react';

import ColorFlashing from '@quoine/components/ColorFlashing';
import Money from '@quoine/components/Money';
import Dash from '@quoine/components/Dash';

const getValueKey = (type) => {
  switch (type) {
    case 'disclose': return 'Disclose';
    case 'filled': return 'Filled';
    default: return '';
  }
};

const OrderQuantity = ({ order, type }) => {
  // convert for sure since it might come from order entry
  const value = Number(
    order[`quantity${getValueKey(type)}`]
  );
  return value ? (
    <ColorFlashing value={value}>
      <Money value={value} currency={order.baseCurrency} />
    </ColorFlashing>
  ) : <Dash />;
};

OrderQuantity.propTypes = {
  order: PropTypes.shape({
    quantity: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    baseCurrency: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['disclose', 'filled']),
};

export default OrderQuantity;
