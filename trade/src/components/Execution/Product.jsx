import PropTypes from 'prop-types';
import React from 'react';

import ColorBySide from '@quoine/components/ColorBySide';

const ExecutionProduct = ({ execution }) => (
  <ColorBySide side="both">
    {execution.product}
  </ColorBySide>
);

ExecutionProduct.propTypes = {
  execution: PropTypes.shape({
    product: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExecutionProduct;
