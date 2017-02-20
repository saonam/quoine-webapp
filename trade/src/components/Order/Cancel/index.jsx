import React from 'react';

import Connector from './Connector';

const OrderCancel = ({ order, layout }) => (
  order.status === 'live' ? (
    <Connector order={order} layout={layout} />
  ) : null
);

OrderCancel.propTypes = {
  order: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
  layout: React.PropTypes.string.isRequired,
};

export default OrderCancel;
