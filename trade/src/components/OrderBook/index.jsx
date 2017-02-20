import React from 'react';

import Header from './Header';
import List from './List';
import Spread from './Spread';

import styles from './styles.css';

const OrderBook = () => (
  <div className={styles.main}>
    <div className={styles.headerSells}>
      <Header side="sells" />
    </div>
    <div className={styles.body}>
      <div className={styles.listWrapper}>
        <div className={styles.listSells}>
          <List side="sells" />
        </div>
      </div>
      <div className={styles.spread}>
        <Spread />
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.listBuys}>
          <List side="buys" />
        </div>
      </div>
    </div>
    <div className={styles.headerBuys}>
      <Header side="buys" />
    </div>
  </div>
);

export default OrderBook;
