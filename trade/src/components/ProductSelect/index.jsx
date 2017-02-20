import React from 'react';

import Current from './Current';
import List from './List';

import styles from './styles.css';

const ProductSelect = () => (
  <div className={styles.main}>
    <div className={styles.current}>
      <Current />
    </div>
    <div className={styles.select}>
      <List />
    </div>
  </div>
);

export default ProductSelect;
