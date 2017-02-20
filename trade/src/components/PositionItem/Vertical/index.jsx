import React from 'react';

import Default from './Default';
import Futures from './Futures';

const PositionItemVertical = ({ position }) => (
  position.market === 'futures' ? (
    <Futures position={position} />
  ) : (
    <Default position={position} />
  )
);

PositionItemVertical.propTypes = {
  position: React.PropTypes.shape({
    market: React.PropTypes.string,
  }).isRequired,
};

export default PositionItemVertical;
