import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const getValueKey = (side) => {
  switch (side) {
    case 'long': return 'Long';
    case 'short': return 'Short';
    default: return '';
  }
};

const MrgAccPosition = ({ mrgAcc, side }) => {
  const value = mrgAcc[`position${getValueKey(side)}`];
  return (
    <ColorFlashing value={value}>
      <Money value={value} currency={mrgAcc.baseCurrency} />
    </ColorFlashing>
  );
};

MrgAccPosition.propTypes = {
  mrgAcc: PropTypes.shape({
    position: PropTypes.number.isRequired,
  }).isRequired,
  side: PropTypes.oneOf(['long', 'short', 'both']),
};

export default MrgAccPosition;
