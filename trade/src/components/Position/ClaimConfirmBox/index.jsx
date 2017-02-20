import React from 'react';

import Connector from './Connector';

const PositionClaimConfirmBox = ({ position }) => (
  position.status === 'open' ? (
    <Connector position={position} />
  ) : null
);

PositionClaimConfirmBox.propTypes = {
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionClaimConfirmBox;
