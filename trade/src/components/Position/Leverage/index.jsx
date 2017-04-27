import PropTypes from 'prop-types';
import React from 'react';

import Default from './Default';
import Futures from './Futures';

const PositionLeverage = ({ position }) => (
  position.market === 'futures' ? (
    <Futures position={position} />
  ) : (
    <Default position={position} />
  )
);

PositionLeverage.propTypes = {
  position: PropTypes.shape({
    market: PropTypes.string,
  }).isRequired,
};

export default PositionLeverage;
