import React from 'react';

const ExecutionId = ({ execution }) => (
  <span>{execution.id}</span>
);

ExecutionId.propTypes = {
  execution: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default ExecutionId;
