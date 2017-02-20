import React from 'react';

import Connector from './Connector';

const PositionClose = ({ position, ...others }) => (
  position.status === 'open' ? (
    <Connector position={position} {...others} />
  ) : null
);

PositionClose.propTypes = {
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionClose;
