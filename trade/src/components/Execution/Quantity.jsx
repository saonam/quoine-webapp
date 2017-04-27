import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';

const ExecutionQuantity = ({ execution }) => (
  <Money value={execution.quantity} currency={execution.baseCurrency} />
);

ExecutionQuantity.propTypes = {
  execution: PropTypes.shape({
    quantity: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    baseCurrency: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExecutionQuantity;
