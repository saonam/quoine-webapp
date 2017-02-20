import React from 'react';

import translate from '@quoine/translate';

import ColorBySide from '@quoine/components/ColorBySide';

const OrderSide = ({ order }) => (
  <ColorBySide side={order.side}>
    {translate(`order:side-${order.side}`)}
  </ColorBySide>
);

OrderSide.propTypes = {
  order: React.PropTypes.shape({
    side: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderSide;
