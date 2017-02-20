import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const MrgAccBaseOpenPrice = ({ mrgAcc, side }) => {
  const value = mrgAcc[
    `baseOpenPrice${side === 'long' ? 'Long' : 'Short'}`
  ];
  return (
    <ColorFlashing value={value}>
      <Money value={value} currency={mrgAcc.quoteCurrency} />
    </ColorFlashing>
  );
};

MrgAccBaseOpenPrice.propTypes = {
  mrgAcc: React.PropTypes.shape({
    baseOpenPriceShort: React.PropTypes.number.isRequired,
    baseOpenPriceLong: React.PropTypes.number.isRequired,
    quoteCurrency: React.PropTypes.string.isRequired,
  }).isRequired,
  side: React.PropTypes.oneOf(['long', 'short']).isRequired,
};

export default MrgAccBaseOpenPrice;
