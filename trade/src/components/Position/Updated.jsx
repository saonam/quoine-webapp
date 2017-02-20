import React from 'react';

import Time from '@quoine/components/Time';

const PositionUpdated = ({ position }) => (
  <Time value={position.updatedAt} type="time" />
);

PositionUpdated.propTypes = {
  position: React.PropTypes.shape({
    updatedAt: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionUpdated;
