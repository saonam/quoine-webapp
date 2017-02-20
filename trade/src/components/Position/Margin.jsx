import React from 'react';

import Money from '@quoine/components/Money';

const PositionMargin = ({ position }) => (
  <Money value={position.margin} currency={position.account} />
);

PositionMargin.propTypes = {
  position: React.PropTypes.shape({
    margin: React.PropTypes.number.isRequired,
    account: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionMargin;
