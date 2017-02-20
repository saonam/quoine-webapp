import React from 'react';

import Connector from './Connector';

const PositionCloseConfirmBox = ({ position }) => (
  position.status === 'open' ? (
    <Connector position={position} />
  ) : null
);

PositionCloseConfirmBox.propTypes = {
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionCloseConfirmBox;
