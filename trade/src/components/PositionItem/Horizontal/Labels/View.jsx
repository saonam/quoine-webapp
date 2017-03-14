import React from 'react';

import Default from './Default';
import Futures from './Futures';

const PositionItemHorizontal = ({ market, user }) => (
  market === 'futures' ? (
    <Futures />
  ) : (
    <Default isQuoineJapan={user.isQuoineJapan} />
  )
);

PositionItemHorizontal.propTypes = {
  market: React.PropTypes.string.isRequired,
  user: React.PropTypes.shape({
    isQuoineJapan: React.PropTypes.bool,
  }).isRequired,
};

export default PositionItemHorizontal;
