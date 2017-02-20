import React from 'react';

import ColorBySide from '@quoine/components/ColorBySide';

const PositionProduct = ({ position }) => (
  <ColorBySide side="both">
    {position.product}
  </ColorBySide>
);

PositionProduct.propTypes = {
  position: React.PropTypes.shape({
    product: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionProduct;
