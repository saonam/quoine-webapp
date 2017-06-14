import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

import getPricescale from './getPricescale';

const ChartsTradingView = ({ id, product, theme, language }) => {
  const pricescale = getPricescale(product.lastPrice);
  const domain = `${window.location.origin}/trading-view-chart/`;
  return (
    <iframe
      className={styles.main} id={id}
      src={
        `${domain}?vendor=${
          process.env.REACT_APP_VENDOR.toUpperCase()
        }&apiServer=${
          process.env.REACT_APP_QUOINE_HOST
        }&symbol=${
          product.symbol
        }&productId=${
          product.id
        }&pricescale=${
          pricescale
        }&theme=${
          theme
        }&language=${
          language
        }`
      }
    />
  );
};

ChartsTradingView.propTypes = {
  id: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
  }),
  theme: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default ChartsTradingView;
