import React from 'react';

const PositionLeverageDefault = ({ position }) => (
  <span>{position.leverage}x</span>
);

PositionLeverageDefault.propTypes = {
  position: React.PropTypes.shape({
    leverage: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionLeverageDefault;
