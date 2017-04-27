import PropTypes from 'prop-types';
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
  market: PropTypes.string.isRequired,
  user: PropTypes.shape({
    underJFSA: PropTypes.bool,
  }).isRequired,
};

export default PositionItemHorizontal;
