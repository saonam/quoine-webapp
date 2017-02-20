import React from 'react';

import Money from '@quoine/components/Money';

const ProductVolume = ({ product }) => (
  <Money
    value={product.volume}
    currency={
      product.isFutures ? product.underlyingCurrency : product.baseCurrency
    }
    noDecimal
  />
);

ProductVolume.propTypes = {
  product: React.PropTypes.shape({
    volume: React.PropTypes.number.isRequired,
    baseCurrency: React.PropTypes.string.isRequired,
    underlyingCurrency: React.PropTypes.string,
    isFutures: React.PropTypes.bool,
  }).isRequired,
};

export default ProductVolume;
