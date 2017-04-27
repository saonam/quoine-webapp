import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const PositionCloseConfirmBox = ({ position }) => (
  position.status === 'open' ? (
    <Connector position={position} />
  ) : null
);

PositionCloseConfirmBox.propTypes = {
  position: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionCloseConfirmBox;
