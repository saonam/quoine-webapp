import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const PositionClaimConfirmBox = ({ position }) => (
  position.status === 'open' ? (
    <Connector position={position} />
  ) : null
);

PositionClaimConfirmBox.propTypes = {
  position: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionClaimConfirmBox;
