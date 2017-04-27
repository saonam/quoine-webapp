import PropTypes from 'prop-types';
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
  mrgAcc: PropTypes.shape({
    baseOpenPriceShort: PropTypes.number.isRequired,
    baseOpenPriceLong: PropTypes.number.isRequired,
    quoteCurrency: PropTypes.string.isRequired,
  }).isRequired,
  side: PropTypes.oneOf(['long', 'short']).isRequired,
};

export default MrgAccBaseOpenPrice;
