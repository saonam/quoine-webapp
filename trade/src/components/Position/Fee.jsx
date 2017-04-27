import PropTypes from 'prop-types';
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
  position: PropTypes.shape({
    feeClose: PropTypes.number.isRequired,
    feeTotal: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['total', 'close']).isRequired,
};

export default PositionFee;
