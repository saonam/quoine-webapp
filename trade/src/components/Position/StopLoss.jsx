import React from 'react';

import Money from '@quoine/components/Money';
import ColorBySide from '@quoine/components/ColorBySide';
import ColorFlashing from '@quoine/components/ColorFlashing';

const PositionStopLoss = ({ position }) => {
  const value = position.stopLoss;
  return (
    <ColorBySide side="negative">
      <ColorFlashing value={value}>
        {value ? (
          <Money value={value} currency={position.quoteCurrency} />
        ) : <span>–</span>}
      </ColorFlashing>
    </ColorBySide>
  );
};

PositionStopLoss.propTypes = {
  position: React.PropTypes.shape({
    stopLoss: React.PropTypes.number.isRequired,
    quoteCurrency: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionStopLoss;
