import React from 'react';

import Money from '@quoine/components/Money';

const getValueKey = (type) => {
  switch (type) {
    case 'total': return 'Total';
    case 'daily': return 'Daily';
    default: return '';
  }
};

const PositionInterest = ({ position, type }) => {
  const value = position[`interest${getValueKey(type)}`];
  return (
    <Money value={value} currency={position.account} />
  );
};

PositionInterest.propTypes = {
  position: React.PropTypes.shape({
    interestDaily: React.PropTypes.number.isRequired,
    interestTotal: React.PropTypes.number.isRequired,
  }).isRequired,
  type: React.PropTypes.oneOf(['total', 'daily']).isRequired,
};

export default PositionInterest;
