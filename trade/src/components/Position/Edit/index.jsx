import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const PositionEdit = ({ position, Element, ...others }) => (
  position.status === 'open' ? (
    <Connector position={position} Element={Element} {...others} />
  ) : (
    <Element position={position} />
  )
);

PositionEdit.propTypes = {
  position: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
  Element: PropTypes.func.isRequired,
};

export default PositionEdit;
