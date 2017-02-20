import React from 'react';

import Connector from './Connector';

const PositionClaim = ({ position, layout }) => (
  position.status === 'open' ? (
    <Connector position={position} layout={layout} />
  ) : null
);

PositionClaim.propTypes = {
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
  layout: React.PropTypes.string.isRequired,
};

export default PositionClaim;
