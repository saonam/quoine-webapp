import React from 'react';

import Money from '@quoine/components/Money';
import Color from '@quoine/components/ColorByValue';
import ColorFlashing from '@quoine/components/ColorFlashing';

const getValueKey = (type) => {
  switch (type) {
    case 'total': return 'Total';
    case 'close': return 'Close';
    default: return '';
  }
};

const PositionPnlWFee = ({ position, type }) => {
  const value = position[`pnlWFee${getValueKey(type)}`];
  return (
    <Color value={value}>
      <ColorFlashing value={value}>
        <Money value={value} currency={position.account} />
      </ColorFlashing>
    </Color>
  );
};

PositionPnlWFee.propTypes = {
  position: React.PropTypes.shape({
    pnlWFeeClose: React.PropTypes.number.isRequired,
    pnlWFeeTotal: React.PropTypes.number.isRequired,
  }).isRequired,
  type: React.PropTypes.oneOf(['total', 'close']).isRequired,
};

export default PositionPnlWFee;
