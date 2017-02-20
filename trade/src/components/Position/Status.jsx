import React from 'react';

import translate from '@quoine/translate';

const PositionStatus = ({ position }) => (
  <span>{translate(`position:status-${position.status}`)}</span>
);

PositionStatus.propTypes = {
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionStatus;
