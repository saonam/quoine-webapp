import React from 'react';

import Money from '@quoine/components/Money';

const ExecutionQuantity = ({ execution }) => (
  <Money value={execution.quantity} currency={execution.baseCurrency} />
);

ExecutionQuantity.propTypes = {
  execution: React.PropTypes.shape({
    quantity: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
    ]).isRequired,
    baseCurrency: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default ExecutionQuantity;
