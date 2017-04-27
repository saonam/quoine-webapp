import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

const PositionStatus = ({ position }) => (
  <span>{translate(`position:status-${position.status}`)}</span>
);

PositionStatus.propTypes = {
  position: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionStatus;
