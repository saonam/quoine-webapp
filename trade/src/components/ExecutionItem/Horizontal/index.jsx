import PropTypes from 'prop-types';
import React from 'react';

import {
  Created,
  Id,
  OrderId,
  Price,
  Product,
  Quantity,
  Side,
  Target,
} from 'components/Execution';

import styles from './styles.css';

const ExecutionItemHorizontal = ({ execution }) => (
  <div className={styles.main}>
    <div className={styles.item}>
      <Created execution={execution} />
    </div>
    <div className={styles.item}>
      <Product execution={execution} />
    </div>
    <div className={styles.item}>
      <Side execution={execution} />
    </div>
    <div className={styles.item}>
      <Target execution={execution} />
    </div>
    <div className={styles.itemNum}>
      <Quantity execution={execution} />
    </div>
    <div className={styles.itemNum}>
      <Price execution={execution} />
    </div>
    <div className={styles.itemCenter}>
      <Id execution={execution} />
    </div>
    <div className={styles.itemCenter}>
      <OrderId execution={execution} />
    </div>
  </div>
);

ExecutionItemHorizontal.propTypes = {
  execution: PropTypes.shape({}).isRequired,
};

export default ExecutionItemHorizontal;
