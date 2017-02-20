import React from 'react';

import Default from './Default';
import Futures from './Futures';

const PositionItemHorizontal = ({ market }) => (
  market === 'futures' ? (
    <Futures />
  ) : (
    <Default />
  )
);

PositionItemHorizontal.propTypes = {
  market: React.PropTypes.string.isRequired,
};

export default PositionItemHorizontal;
