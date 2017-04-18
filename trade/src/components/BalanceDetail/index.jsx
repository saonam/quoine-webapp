import React from 'react';

import translate from '@quoine/translate';

import AccountWrapper from 'components/AccountWrapper';

import Header from './Header';
import Body from './Body';

import styles from './styles.css';

const BalanceDetail = () => (
  <div className={styles.main}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.body}>
      <AccountWrapper Body={Body} label={translate('balance-detail:account')} />
    </div>
  </div>
);

export default BalanceDetail;
