import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

import Withdrawal from 'components/Withdrawal';

import styles from './styles.css';

const WithdrawalPanel = () => (
  <div className={styles.main}>
    <Header styleName="text center negative">
      {translate('withdrawal:title')}
    </Header>
    <div className={styles.body}>
      <Withdrawal />
    </div>
  </div>
);

export default WithdrawalPanel;
