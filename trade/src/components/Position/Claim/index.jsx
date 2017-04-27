import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const PositionClaim = ({ position, layout }) => (
  position.status === 'open' ? (
    <Connector position={position} layout={layout} />
  ) : null
);

PositionClaim.propTypes = {
  position: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
  layout: PropTypes.string.isRequired,
};

export default PositionClaim;
