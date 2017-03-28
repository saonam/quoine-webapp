import React from 'react';

import Balance from 'components/Balance';
import Volume from 'components/Volume';

import styles from './styles.css';

const VolumeBalancePanel = () => (
  <div className={styles.main}>
    <div className={styles.balance}>
      <Balance />
    </div>
    <div className={styles.volume}>
      <Volume />
    </div>
  </div>
);

export default VolumeBalancePanel;
