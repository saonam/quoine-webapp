import React from 'react';

import Time from '@quoine/components/Time';

const ExecutionCreated = ({ execution }) => (
  <Time value={execution.createdAt} type="time" />
);

ExecutionCreated.propTypes = {
  execution: React.PropTypes.shape({
    createdAt: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default ExecutionCreated;
