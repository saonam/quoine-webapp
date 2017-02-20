import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

import Fund from 'components/Fund';

import styles from './styles.css';

const FundPanel = () => (
  <div className={styles.main}>
    <Header styleName="text center positive">
      {translate('fund:title')}
    </Header>
    <div className={styles.body}>
      <Fund />
    </div>
  </div>
);

export default FundPanel;
