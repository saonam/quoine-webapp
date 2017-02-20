import React from 'react';

import translate from '@quoine/translate';

const OrderDirection = ({ order }) => (
  <span>
    {translate(`order:direction-${order.direction}`)}
  </span>
);

OrderDirection.propTypes = {
  order: React.PropTypes.shape({
    direction: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderDirection;
