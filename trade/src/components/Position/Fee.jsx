import React from 'react';

import Money from '@quoine/components/Money';

const getValueKey = (type) => {
  switch (type) {
    case 'total': return 'Total';
    case 'close': return 'Close';
    default: return '';
  }
};

const PositionFee = ({ position, type }) => {
  const value = position[`fee${getValueKey(type)}`];
  return (
    <Money value={value} currency={position.account} />
  );
};

PositionFee.propTypes = {
  position: React.PropTypes.shape({
    feeClose: React.PropTypes.number.isRequired,
    feeTotal: React.PropTypes.number.isRequired,
  }).isRequired,
  type: React.PropTypes.oneOf(['total', 'close']).isRequired,
};

export default PositionFee;
