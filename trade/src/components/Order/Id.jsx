import PropTypes from 'prop-types';
import React from 'react';

const OrderId = ({ order }) => (
  <span>
    {order.market !== 'futures' ? order.id : `${order.id.slice(0, 8)}…`}
  </span>
);

OrderId.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    market: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderId;
