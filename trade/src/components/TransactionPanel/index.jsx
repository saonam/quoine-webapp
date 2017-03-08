import React from 'react';

import TransactionBlotter from 'components/TransactionBlotter';

import styles from './styles.css';

const TransactionPanel = () => (
  <div className={styles.main}>
    <TransactionBlotter />
  </div>
);

export default TransactionPanel;
