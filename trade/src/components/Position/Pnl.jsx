import React from 'react';

import Money from '@quoine/components/Money';
import Color from '@quoine/components/ColorByValue';
import ColorFlashing from '@quoine/components/ColorFlashing';

const getValueKey = (type) => {
  switch (type) {
    case 'open': return 'Open';
    case 'close': return 'Close';
    default: return '';
  }
};

const PositionPnl = ({ position, type }) => {
  const value = position[`pnl${getValueKey(type)}`];
  return (
    <Color value={value}>
      <ColorFlashing value={value}>
        <Money value={value} currency={position.account} />
      </ColorFlashing>
    </Color>
  );
};

PositionPnl.propTypes = {
  position: React.PropTypes.shape({
    pnl: React.PropTypes.number.isRequired,
    pnlOpen: React.PropTypes.number.isRequired,
    pnlClose: React.PropTypes.number.isRequired,
  }).isRequired,
  type: React.PropTypes.oneOf(['close', 'open']),
};

export default PositionPnl;
