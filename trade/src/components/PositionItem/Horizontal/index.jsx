import PropTypes from 'prop-types';
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
  position: PropTypes.shape({
    market: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    underJFSA: PropTypes.bool,
  }).isRequired,
};

export default PositionItemHorizontal;
