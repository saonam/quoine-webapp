import React from 'react';

import Money from '@quoine/components/Money';
import Color from '@quoine/components/ColorByValue';
import ColorFlashing from '@quoine/components/ColorFlashing';

const getValueKey = (side) => {
  switch (side) {
    case 'long': return 'Long';
    case 'short': return 'Short';
    default: return '';
  }
};

const MrgAccPnl = ({ mrgAcc, side }) => {
  const value = mrgAcc[`pnl${getValueKey(side)}`];
  return (
    <Color value={value}>
      <ColorFlashing value={value}>
        <Money value={value} currency={mrgAcc.account} />
      </ColorFlashing>
    </Color>
  );
};

MrgAccPnl.propTypes = {
  mrgAcc: React.PropTypes.shape({
    pnl: React.PropTypes.number.isRequired,
    pnlLong: React.PropTypes.number.isRequired,
    pnlShort: React.PropTypes.number.isRequired,
  }).isRequired,
  side: React.PropTypes.oneOf(['long', 'short', 'both']),
};

export default MrgAccPnl;
