import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const OrderCancel = ({ order, layout }) => (
  order.status === 'live' ? (
    <Connector order={order} layout={layout} />
  ) : null
);

OrderCancel.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
  layout: PropTypes.string.isRequired,
};

export default OrderCancel;
