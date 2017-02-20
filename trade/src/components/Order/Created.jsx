import React from 'react';

import Time from '@quoine/components/Time';

const OrderCreated = ({ order }) => (
  <Time value={order.createdAt} type="time" />
);

OrderCreated.propTypes = {
  order: React.PropTypes.shape({
    createdAt: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderCreated;
