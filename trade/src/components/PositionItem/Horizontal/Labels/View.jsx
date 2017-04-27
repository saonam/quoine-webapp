import React from 'react';

import Default from './Default';
import Futures from './Futures';

const PositionItemHorizontal = ({ market, user }) => (
  market === 'futures' ? (
    <Futures />
  ) : (
    <Default underJFSA={user.underJFSA} />
  )
);

PositionItemHorizontal.propTypes = {
  market: React.PropTypes.string.isRequired,
  user: React.PropTypes.shape({
    underJFSA: React.PropTypes.bool,
  }).isRequired,
};

export default PositionItemHorizontal;
