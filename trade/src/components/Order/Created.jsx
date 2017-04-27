import PropTypes from 'prop-types';
import React from 'react';

import Time from '@quoine/components/Time';

const OrderCreated = ({ order }) => (
  <Time value={order.createdAt} type="time" />
);

OrderCreated.propTypes = {
  order: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderCreated;
