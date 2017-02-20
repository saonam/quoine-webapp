import React from 'react';

import translate from '@quoine/translate';

const OrderStatus = ({ order }) => (
  <span>{translate(`order:status-${order.status}`)}</span>
);

OrderStatus.propTypes = {
  order: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderStatus;
