import React from 'react';

import Connector from './Connector';

const OrderEditConfirmBox = ({ order }) => (
  order.status === 'live' && order.quantityFilled === 0 ? (
    <Connector order={order} />
  ) : null
);

OrderEditConfirmBox.propTypes = {
  order: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
    quantityFilled: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderEditConfirmBox;
