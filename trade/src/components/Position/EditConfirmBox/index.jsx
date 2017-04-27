import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const PositionEditConfirmBox = ({ position }) => (
  position.status === 'open' ? (
    <Connector position={position} />
  ) : null
);

PositionEditConfirmBox.propTypes = {
  position: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionEditConfirmBox;
