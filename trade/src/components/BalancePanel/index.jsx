import React from 'react';

import Volumes from 'components/Volumes';
import Balance from 'components/Balance';

import styles from './styles.css';

const BalancePanel = () => (
  <div className={styles.main}>
    <div className={styles.balance}>
      <Balance />
    </div>
    <div className={styles.volumes}>
      <Volumes />
    </div>
  </div>
);

export default BalancePanel;
