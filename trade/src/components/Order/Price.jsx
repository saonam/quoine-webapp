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
  order: React.PropTypes.shape({
    price: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
    ]).isRequired,
    quoteCurrency: React.PropTypes.string.isRequired,
  }).isRequired,
  type: React.PropTypes.oneOf(['average']),
};

export default OrderPrice;
