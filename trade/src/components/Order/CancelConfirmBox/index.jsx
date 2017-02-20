import React from 'react';

import Connector from './Connector';

const OrderCancelConfirmBox = ({ order }) => (
  order.status === 'live' ? (
    <Connector order={order} />
  ) : null
);

OrderCancelConfirmBox.propTypes = {
  order: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCancelConfirmBox;
