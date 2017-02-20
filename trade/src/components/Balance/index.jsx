import React from 'react';

import AccountWrapper from 'components/AccountWrapper';

import Header from './Header';
import Body from './Body';

import styles from './styles.css';

const Balance = () => (
  <div className={styles.main}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.body}>
      <AccountWrapper Body={Body} />
    </div>
  </div>
);

export default Balance;
