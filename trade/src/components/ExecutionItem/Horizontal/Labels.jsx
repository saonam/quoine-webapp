import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const ExecutionItemHorizontalLabels = () => (
  <div className={styles.labels}>
    <div className={styles.item}>
      &nbsp;
    </div>
    <div className={styles.item}>
      {translate('execution:product')}
    </div>
    <div className={styles.item}>
      {translate('execution:side')}
    </div>
    <div className={styles.item}>
      {translate('execution:target')}
    </div>
    <div className={styles.itemNum}>
      {translate('execution:quantity')}
    </div>
    <div className={styles.itemNum}>
      {translate('execution:price')}
    </div>
    <div className={styles.itemCenter}>
      {translate('execution:id')}
    </div>
    <div className={styles.itemCenter}>
      {translate('execution:order-id')}
    </div>
  </div>
);

export default ExecutionItemHorizontalLabels;
