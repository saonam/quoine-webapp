import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import ColorBySide from '@quoine/components/ColorBySide';
import ColorFlashing from '@quoine/components/ColorFlashing';

const PositionTakeProfit = ({ position }) => {
  const value = position.takeProfit;
  return (
    <ColorBySide side="positive">
      <ColorFlashing value={value}>
        {value ? (
          <Money value={value} currency={position.quoteCurrency} />
        ) : <span>–</span>}
      </ColorFlashing>
    </ColorBySide>
  );
};

PositionTakeProfit.propTypes = {
  position: PropTypes.shape({
    takeProfit: PropTypes.number.isRequired,
    quoteCurrency: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionTakeProfit;
