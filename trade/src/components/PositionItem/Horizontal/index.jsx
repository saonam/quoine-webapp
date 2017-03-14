import React from 'react';

import Default from './Default';
import Futures from './Futures';

const PositionItemHorizontal = ({ position, user }) => (
  position.market === 'futures' ? (
    <Futures position={position} />
  ) : (
    <Default position={position} isQuoineJapan={user.isQuoineJapan} />
  )
);

PositionItemHorizontal.propTypes = {
  position: React.PropTypes.shape({
    market: React.PropTypes.string,
  }).isRequired,
  user: React.PropTypes.shape({
    isQuoineJapan: React.PropTypes.bool,
  }).isRequired,
};

export default PositionItemHorizontal;
