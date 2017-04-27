import PropTypes from 'prop-types';
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
  position: PropTypes.shape({
    pnl: PropTypes.number.isRequired,
    pnlOpen: PropTypes.number.isRequired,
    pnlClose: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['close', 'open']),
};

export default PositionPnl;
