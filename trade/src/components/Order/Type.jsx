import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

const OrderType = ({ order }) => (
  <span>
    {translate(`order:${
      order.target === 'closed' ? 'target-settle' : `type-${order.type}`
    }`)}
  </span>
);

OrderType.propTypes = {
  order: PropTypes.shape({
    target: PropTypes.string,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderType;
