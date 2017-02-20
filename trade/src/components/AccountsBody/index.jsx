import React from 'react';

import BalancePanel from 'components/BalancePanel';
import TransPanel from 'components/TransPanel';
import FundPanel from 'components/FundPanel';
import WithdrawalPanel from 'components/WithdrawalPanel';

import styles from './styles.css';

const AccountsBody = () => (
  <div className={styles.main}>
    <div className={styles.panel}>
      <BalancePanel />
    </div>
    <div className={styles.panel}>
      <FundPanel />
    </div>
    <div className={styles.panel}>
      <WithdrawalPanel />
    </div>
    <div className={styles.panel}>
      <TransPanel />
    </div>
  </div>
);

export default AccountsBody;
