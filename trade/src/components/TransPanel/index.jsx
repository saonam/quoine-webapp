import React from 'react';

import TransBlotter from 'components/TransBlotter';

import styles from './styles.css';

const TransPanel = () => (
  <div className={styles.main}>
    <TransBlotter />
  </div>
);

export default TransPanel;
