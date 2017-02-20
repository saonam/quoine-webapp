import React from 'react';

import Time from '@quoine/components/Time';

const PositionCreated = ({ position }) => (
  <Time value={position.createdAt} type="time" />
);

PositionCreated.propTypes = {
  position: React.PropTypes.shape({
    createdAt: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionCreated;
