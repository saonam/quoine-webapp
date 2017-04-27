import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

const OrderStatus = ({ order }) => (
  <span>{translate(`order:status-${order.status}`)}</span>
);

OrderStatus.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderStatus;
