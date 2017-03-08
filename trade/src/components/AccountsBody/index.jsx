import React from 'react';

import VolumePanel from 'components/VolumePanel';
import TransactionPanel from 'components/TransactionPanel';
import FundPanel from 'components/FundPanel';
import WithdrawalPanel from 'components/WithdrawalPanel';

import styles from './styles.css';

const AccountsBody = () => (
  <div className={styles.main}>
    <div className={styles.panel}>
      <VolumePanel />
    </div>
    <div className={styles.panel}>
      <FundPanel />
    </div>
    <div className={styles.panel}>
      <WithdrawalPanel />
    </div>
    <div className={styles.panel}>
      <TransactionPanel />
    </div>
  </div>
);

export default AccountsBody;
