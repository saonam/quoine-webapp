import PropTypes from 'prop-types';
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
  position: PropTypes.shape({
    stopLoss: PropTypes.number.isRequired,
    quoteCurrency: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionStopLoss;
