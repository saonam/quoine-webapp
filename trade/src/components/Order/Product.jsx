import React from 'react';

import ColorBySide from '@quoine/components/ColorBySide';

const OrderProduct = ({ order }) => (
  <ColorBySide side="both">
    {order.product}
  </ColorBySide>
);

OrderProduct.propTypes = {
  order: React.PropTypes.shape({
    product: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderProduct;
