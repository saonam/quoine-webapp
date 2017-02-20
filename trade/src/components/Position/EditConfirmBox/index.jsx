import React from 'react';

import Connector from './Connector';

const PositionEditConfirmBox = ({ position }) => (
  position.status === 'open' ? (
    <Connector position={position} />
  ) : null
);

PositionEditConfirmBox.propTypes = {
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionEditConfirmBox;
