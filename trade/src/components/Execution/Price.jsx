import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';

const ExecutionPrice = ({ execution }) => (
  <Money value={execution.price} currency={execution.quoteCurrency} />
);

ExecutionPrice.propTypes = {
  execution: PropTypes.shape({
    price: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    quoteCurrency: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExecutionPrice;
