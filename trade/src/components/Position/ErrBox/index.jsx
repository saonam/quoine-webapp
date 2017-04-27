import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const PositionEditErrBox = ({ position }) => (
  position.status === 'open' ? (
    <Connector position={position} />
  ) : null
);

PositionEditErrBox.propTypes = {
  position: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionEditErrBox;
