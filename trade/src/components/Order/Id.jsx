import React from 'react';

const OrderId = ({ order }) => (
  <span>
    {order.market !== 'futures' ? order.id : `${order.id.slice(0, 8)}…`}
  </span>
);

OrderId.propTypes = {
  order: React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    market: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderId;
