import PropTypes from 'prop-types';
import React from 'react';

const ExecutionId = ({ execution }) => (
  <span>{execution.id}</span>
);

ExecutionId.propTypes = {
  execution: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ExecutionId;
