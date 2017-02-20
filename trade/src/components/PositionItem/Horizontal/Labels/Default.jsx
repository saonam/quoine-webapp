import React from 'react';

import translate from '@quoine/translate';
import IconPadding from '@quoine/components/IconPadding';

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
      {translate('position:quantity-close')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:price-open')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:price-close')}
    </div>
    <div className={styles.itemNumWEdit}>
      {translate('position:stop-loss')}
      <IconPadding />
    </div>
    <div className={styles.itemNumWEdit}>
      {translate('position:take-profit')}
      <IconPadding />
    </div>
    <div className={styles.itemNum}>
      {translate('position:margin')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:interest-total')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:pnl-close')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:pnl-open')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:pnl')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:fee')}
    </div>
    <div className={styles.itemNum}>
      {translate('position:pnl-w-fee')}
    </div>
    <div className={styles.id}>
      {translate('position:id')}
    </div>
    <div className={styles.button}>
      &nbsp;
    </div>
    <div className={styles.buttonWEdit}>
      &nbsp;
    </div>
  </div>
);

export default PositionItemHorizontalLabels;
