import React from 'react';

import BalanceDetail from 'components/BalanceDetail';
import Volumes from 'components/Volumes';

import styles from './styles.css';

const VolumeBalancePanel = () => (
  <div className={styles.main}>
    <div className={styles.balanceDetail}>
      <BalanceDetail />
    </div>
    <div className={styles.volume}>
      <Volumes />
    </div>
  </div>
);

export default VolumeBalancePanel;
