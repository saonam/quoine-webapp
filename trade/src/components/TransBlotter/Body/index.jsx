import React from 'react';

import AccountSelect from '../AccountSelect';
import List from '../List';

import styles from './styles.css';

const TransBlotterBody = () => (
  <div className={styles.main}>
    <div className={styles.account}>
      <AccountSelect />
    </div>
    <div className={styles.list}>
      <List />
    </div>
  </div>
);

export default TransBlotterBody;
