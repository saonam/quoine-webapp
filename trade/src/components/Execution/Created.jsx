import PropTypes from 'prop-types';
import React from 'react';

import Time from '@quoine/components/Time';

const ExecutionCreated = ({ execution }) => (
  <Time value={execution.createdAt} type="time" />
);

ExecutionCreated.propTypes = {
  execution: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
  }).isRequired,
};

export default ExecutionCreated;
