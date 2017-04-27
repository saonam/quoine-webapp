import PropTypes from 'prop-types';
import React from 'react';

const ExecutionOrderId = ({ execution }) => (
  <span>{execution.orderId}</span>
);

ExecutionOrderId.propTypes = {
  execution: PropTypes.shape({
    orderId: PropTypes.number.isRequired,
  }).isRequired,
};

export default ExecutionOrderId;
