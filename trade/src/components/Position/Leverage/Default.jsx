import PropTypes from 'prop-types';
import React from 'react';

const PositionLeverageDefault = ({ position }) => (
  <span>{position.leverage}x</span>
);

PositionLeverageDefault.propTypes = {
  position: PropTypes.shape({
    leverage: PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionLeverageDefault;
