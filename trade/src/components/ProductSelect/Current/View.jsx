import React from 'react';

import Overview from 'components/ProductOverview';

const ProductSelectCurrent = ({ symbol }) => (
  <Overview symbol={symbol} />
);

ProductSelectCurrent.propTypes = {
  symbol: React.PropTypes.string.isRequired,
};

export default ProductSelectCurrent;
