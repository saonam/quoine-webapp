import PropTypes from 'prop-types';
import React from 'react';

import Loading from '@quoine/components/LoadingIconWrapper';

import Header from './Header';

import CryptoWatch from './CryptoWatch';
import TradingView from './TradingView';

import styles from './styles.css';

const Charts = ({ product, double, provider, ...others }) => {
  if (!product) {
    return (<Loading />);
  }

  const ChartType = provider === 'crypto-watch' ? CryptoWatch : TradingView;
  return (
    <div className={`${styles.main} ${styles[double ? 'double' : 'single']}`}>
      <header className={styles.header}>
        <Header double={double} provider={provider} />
      </header>
      <div className={styles.primary}>
        <ChartType id="primary-chart" product={product} {...others} />
      </div>
      {double ? (
        <div className={styles.secondary}>
          <ChartType id="secondary-chart" product={product} {...others} />
        </div>
      ) : null}
    </div>
  );
};

Charts.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    symbol: PropTypes.string.isRequired,
  }),
  ...Header.propTypes.double,
  ...Header.propTypes.provider,
};

export default Charts;
