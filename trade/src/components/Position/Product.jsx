import PropTypes from 'prop-types';
import React from 'react';

import ColorBySide from '@quoine/components/ColorBySide';

const PositionProduct = ({ position }) => (
  <ColorBySide side="both">
    {position.product}
  </ColorBySide>
);

PositionProduct.propTypes = {
  position: PropTypes.shape({
    product: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionProduct;
