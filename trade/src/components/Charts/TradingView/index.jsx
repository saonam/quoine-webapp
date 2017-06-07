import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const ChartsTradingView = ({ id, product, theme, language }) => (
  <iframe
    className={styles.main} id={id}
    src={`
      https://tradingview.qryptos.com?theme=${
        theme
      }&language=${
        language
      }&symbol=${
        product.symbol
      }&productId=${
        product.id
      }&apiServer=${
        process.env.REACT_APP_QUOINE_HOST
      }
    `}
  />
);

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
