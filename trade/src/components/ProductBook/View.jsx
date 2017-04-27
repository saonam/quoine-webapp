import PropTypes from 'prop-types';
import React from 'react';

import TradeFeed from 'components/TradeFeed';
import OrderBook from 'components/OrderBook';

import styles from './styles.css';

const getClassName = (market) => (
  `${styles.main} ${market === 'futures' ? styles.futures : ''}`
);

const ProductBook = ({ market }) => (
  <div className={getClassName(market)}>
    <div className={styles.book}>
      <OrderBook />
    </div>
    {market !== 'futures' ? (
      <div className={styles.feed}>
        <TradeFeed />
      </div>
    ) : null}
  </div>
);

ProductBook.propTypes = {
  market: PropTypes.string.isRequired,
};

export default ProductBook;
