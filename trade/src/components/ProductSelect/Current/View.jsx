import PropTypes from 'prop-types';
import React from 'react';

import Overview from 'components/ProductOverview';

const ProductSelectCurrent = ({ symbol }) => (
  <Overview symbol={symbol} />
);

ProductSelectCurrent.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default ProductSelectCurrent;
