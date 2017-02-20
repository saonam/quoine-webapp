import React from 'react';

import translate from '@quoine/translate';
import IconPadding from '@quoine/components/IconPadding';

import styles from './styles.css';

const OrderItemHorizontalLabels = () => (
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
    <div className={styles.item}>
      &nbsp;
    </div>
    <div className={styles.itemNumWEdit}>
      {translate('order:quantity')}
      <IconPadding />
    </div>
    <div className={styles.itemNumWEdit}>
      {translate('order:price-open')}
      <IconPadding />
    </div>
    <div className={styles.itemNum}>
      {translate('order:qty-disc')}
    </div>
    <div className={styles.itemNum}>
      {translate('order:qty-filled')}
    </div>
    <div className={styles.itemNum}>
      {translate('order:price-avg')}
    </div>
    <div className={styles.id}>
      {translate('order:id')}
    </div>
    <div className={styles.button}>
      &nbsp;
    </div>
  </div>
);

export default OrderItemHorizontalLabels;
