import React from 'react';

import Default from './Default';
import Futures from './Futures';

const PositionItemHorizontal = ({ position, user }) => (
  position.market === 'futures' ? (
    <Futures position={position} />
  ) : (
    <Default position={position} underJFSA={user.underJFSA} />
  )
);

PositionItemHorizontal.propTypes = {
  position: React.PropTypes.shape({
    market: React.PropTypes.string,
  }).isRequired,
  user: React.PropTypes.shape({
    underJFSA: React.PropTypes.bool,
  }).isRequired,
};

export default PositionItemHorizontal;
