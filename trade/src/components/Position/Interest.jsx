import PropTypes from 'prop-types';
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
  position: PropTypes.shape({
    interestDaily: PropTypes.number.isRequired,
    interestTotal: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['total', 'daily']).isRequired,
};

export default PositionInterest;
