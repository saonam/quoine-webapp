import React from 'react';

import translate from '@quoine/translate';

const ExecutionTarget = ({ execution }) => (
  <span>
    {translate(`execution:target-${execution.target}`)}
  </span>
);

ExecutionTarget.propTypes = {
  execution: React.PropTypes.shape({
    target: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default ExecutionTarget;
