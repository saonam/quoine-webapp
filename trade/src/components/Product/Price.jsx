import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import Color from '@quoine/components/ColorByValue';
import ColorFlashing from '@quoine/components/ColorFlashing';

const ProductPrice = ({ product, type }) => {
  const value = product[type];
  return (
    <Color value={product.indicator}>
      <ColorFlashing value={value}>
        <Money value={value} currency={product.quoteCurrency} />
      </ColorFlashing>
    </Color>
  );
};

ProductPrice.propTypes = {
  product: PropTypes.shape({
    bid: PropTypes.number.isRequired,
    ask: PropTypes.number.isRequired,
    indicator: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['bid', 'ask', 'last']).isRequired,
};

export default ProductPrice;
