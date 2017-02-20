import React from 'react';

import {
  StatusCancel,
  Created,
  EditPadding,
  Id,
  Leverage,
  Price,
  PriceWEdit,
  Product,
  Quantity,
  QuantityWEdit,
  Side,
  Type,
} from 'components/Order';

import styles from './styles.css';

const OrderItemHorizontal = ({ order }) => (
  <div className={styles.main}>
    <div className={styles.item}>
      <Created order={order} />
    </div>
    <div className={styles.item}>
      <Product order={order} />
    </div>
    <div className={styles.item}>
      <Type order={order} />
    </div>
    <div className={styles.item}>
      <span>
        <Side order={order} />
      </span>
      <span className={styles.leverage}>
        <Leverage order={order} />
      </span>
    </div>
    <div className={styles.itemNumWEdit}>
      <QuantityWEdit order={order} layout="horizontal" />
      <EditPadding order={order} />
    </div>
    <div className={styles.itemNumWEdit}>
      <PriceWEdit order={order} layout="horizontal" />
      <EditPadding order={order} />
    </div>
    <div className={styles.itemNum}>
      <Quantity order={order} type="disclose" />
    </div>
    <div className={styles.itemNum}>
      <Quantity order={order} type="filled" />
    </div>
    <div className={styles.itemNum}>
      <Price order={order} type="average" />
    </div>
    <div className={styles.id}>
      <Id order={order} />
    </div>
    <div className={styles.button}>
      <StatusCancel order={order} layout="horizontal" />
    </div>
  </div>
);

OrderItemHorizontal.propTypes = {
  order: React.PropTypes.shape({}).isRequired,
};

export default OrderItemHorizontal;
