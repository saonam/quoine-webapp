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
  product: React.PropTypes.shape({
    bid: React.PropTypes.number.isRequired,
    ask: React.PropTypes.number.isRequired,
    indicator: React.PropTypes.number.isRequired,
  }).isRequired,
  type: React.PropTypes.oneOf(['bid', 'ask', 'last']).isRequired,
};

export default ProductPrice;
