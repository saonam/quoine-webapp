import React from 'react';

import Money from '@quoine/components/Money';

const ExecutionPrice = ({ execution }) => (
  <Money value={execution.price} currency={execution.quoteCurrency} />
);

ExecutionPrice.propTypes = {
  execution: React.PropTypes.shape({
    price: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
    ]).isRequired,
    quoteCurrency: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default ExecutionPrice;
