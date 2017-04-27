import PropTypes from 'prop-types';
import React from 'react';

const PositionId = ({ position }) => (
  <span>{position.id}</span>
);

PositionId.propTypes = {
  position: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionId;
