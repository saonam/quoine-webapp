import React from 'react';

import {
  Price,
  Product,
  Quantity,
  Side,
} from 'components/Execution';

import styles from './styles.css';

const ExecutionItemOverview = ({ execution }) => (
  <div className={styles.main}>
    <div className={styles.row}>
      <div className={styles.left}>
        <div className={styles.product}>
          <Product execution={execution} />
        </div>
        <div className={styles.side}>
          <Side execution={execution} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.price}>
          <Price execution={execution} />
        </div>
        <span>×</span>
        <div className={styles.quantity}>
          <Quantity execution={execution} />
        </div>
      </div>
    </div>
  </div>
);

ExecutionItemOverview.propTypes = {
  execution: React.PropTypes.shape({}).isRequired,
};

export default ExecutionItemOverview;
