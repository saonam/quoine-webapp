import PropTypes from 'prop-types';
import React from 'react';

import ColorFlashing from '@quoine/components/ColorFlashing';
import Money from '@quoine/components/Money';
import Dash from '@quoine/components/Dash';

const getValueKey = (type) => {
  switch (type) {
    case 'average': return 'Average';
    default: return '';
  }
};

const OrderPrice = ({ order, type }) => {
  // convert for sure since it might come from order entry
  const value = Number(
    order[`price${getValueKey(type)}`]
  );
  return value ? (
    <ColorFlashing value={value}>
      <Money value={value} currency={order.quoteCurrency} />
    </ColorFlashing>
  ) : <Dash />;
};

OrderPrice.propTypes = {
  order: PropTypes.shape({
    price: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    quoteCurrency: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['average']),
};

export default OrderPrice;
