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
  order: React.PropTypes.shape({
    target: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderType;
