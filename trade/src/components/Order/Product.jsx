import PropTypes from 'prop-types';
import React from 'react';

import ColorBySide from '@quoine/components/ColorBySide';

const OrderProduct = ({ order }) => (
  <ColorBySide side="both">
    {order.product}
  </ColorBySide>
);

OrderProduct.propTypes = {
  order: PropTypes.shape({
    product: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderProduct;
