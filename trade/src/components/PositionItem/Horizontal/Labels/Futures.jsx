import React from 'react';

import translate from '@quoine/translate';

import styles from '../styles.css';

const PositionItemHorizontalLabels = () => (
  <div className={styles.labels}>
    <div className={styles.item}>
      &nbsp;
    </div>
    <div className={styles.item}>
      &nbsp;
    </div>
    <div className={styles.item}>
      &nbsp;
    </div>
    <div className={styles.itemNum}>
      {translate('position:quantity-open')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:price-open')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:price-mark')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:price-liq')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:margin')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:value')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:pnl-realised')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:pnl-unrealised')}
    </div>
  </div>
);

export default PositionItemHorizontalLabels;
