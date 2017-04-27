import PropTypes from 'prop-types';
import React from 'react';

import t from '@quoine/translate';

import Money from '@quoine/components/Money';

const ProductPriceLabel = ({ product, type }) => (
  <span>
    <span>{t(`product:${type === 'bid' ? 'low' : 'high'}`)} </span>
    <Money
      value={type === 'bid' ? product.lowBid : product.highAsk}
      currency={product.quoteCurrency}
    />
  </span>
);

ProductPriceLabel.propTypes = {
  product: PropTypes.shape({
    lowBid: PropTypes.number.isRequired,
    highAsk: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['bid', 'ask']).isRequired,
};

export default ProductPriceLabel;
