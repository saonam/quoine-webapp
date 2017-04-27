import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

const OrderDirection = ({ order }) => (
  <span>
    {translate(`order:direction-${order.direction}`)}
  </span>
);

OrderDirection.propTypes = {
  order: PropTypes.shape({
    direction: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderDirection;
