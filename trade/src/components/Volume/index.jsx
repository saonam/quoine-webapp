import React from 'react';

import Header from './Header';
import Body from './Body';

import styles from './styles.css';

const Volume = () => (
  <div className={styles.main}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.body}>
      <Body />
    </div>
  </div>
);

export default Volume;
