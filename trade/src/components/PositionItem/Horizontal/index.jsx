import React from 'react';

import Default from './Default';
import Futures from './Futures';

const PositionItemHorizontal = ({ position }) => (
  position.market === 'futures' ? (
    <Futures position={position} />
  ) : (
    <Default position={position} />
  )
);

PositionItemHorizontal.propTypes = {
  position: React.PropTypes.shape({
    market: React.PropTypes.string,
  }).isRequired,
};

export default PositionItemHorizontal;
