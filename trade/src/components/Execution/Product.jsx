import React from 'react';

import ColorBySide from '@quoine/components/ColorBySide';

const ExecutionProduct = ({ execution }) => (
  <ColorBySide side="both">
    {execution.product}
  </ColorBySide>
);

ExecutionProduct.propTypes = {
  execution: React.PropTypes.shape({
    product: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default ExecutionProduct;
