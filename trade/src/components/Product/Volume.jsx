import PropTypes from 'prop-types';
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
  product: PropTypes.shape({
    volume: PropTypes.number.isRequired,
    baseCurrency: PropTypes.string.isRequired,
    underlyingCurrency: PropTypes.string,
    isFutures: PropTypes.bool,
  }).isRequired,
};

export default ProductVolume;
