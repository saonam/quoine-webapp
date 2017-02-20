import React from 'react';

const ExecutionOrderId = ({ execution }) => (
  <span>{execution.orderId}</span>
);

ExecutionOrderId.propTypes = {
  execution: React.PropTypes.shape({
    orderId: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default ExecutionOrderId;
