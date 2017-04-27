import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

const ExecutionTarget = ({ execution }) => (
  <span>
    {translate(`execution:target-${execution.target}`)}
  </span>
);

ExecutionTarget.propTypes = {
  execution: PropTypes.shape({
    target: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExecutionTarget;
