import React from 'react';

const PositionId = ({ position }) => (
  <span>{position.id}</span>
);

PositionId.propTypes = {
  position: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionId;
