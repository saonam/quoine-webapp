import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const PositionClose = ({ position, ...others }) => (
  position.status === 'open' ? (
    <Connector position={position} {...others} />
  ) : null
);

PositionClose.propTypes = {
  position: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionClose;
