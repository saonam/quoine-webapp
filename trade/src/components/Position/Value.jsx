import React from 'react';

import Money from '@quoine/components/Money';

const PositionValue = ({ position }) => (
  <Money value={position.value} currency={position.account} />
);

PositionValue.propTypes = {
  position: React.PropTypes.shape({
    value: React.PropTypes.number.isRequired,
    account: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionValue;
