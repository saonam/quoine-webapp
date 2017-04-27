import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const OrderCancelConfirmBox = ({ order }) => (
  order.status === 'live' ? (
    <Connector order={order} />
  ) : null
);

OrderCancelConfirmBox.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCancelConfirmBox;
