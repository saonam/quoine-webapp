import React from 'react';

import BalanceTotal from 'components/BalanceTotal';
import BalanceDetail from 'components/BalanceDetail';
import Volume from 'components/Volume';

import styles from './styles.css';

const VolumeBalancePanel = () => (
  <div className={styles.main}>
    <div className={styles.child}>
      <BalanceTotal />
    </div>
    <div className={styles.child}>
      <BalanceDetail />
    </div>
    <div className={styles.child}>
      <Volume />
    </div>
  </div>
);

export default VolumeBalancePanel;
