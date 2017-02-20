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
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
  Element: React.PropTypes.func.isRequired,
};

export default PositionEdit;
