import PropTypes from 'prop-types';
import React from 'react';

import {
  Leverage,
  PriceWEdit,
  Product,
  Progress,
  QuantityWEdit,
  StatusCancel,
  CancelConfirmBox,
  EditConfirmBox,
  EditErrBox,
  Side,
} from 'components/Order';

import styles from './styles.css';

const stop = (event) => { event.stopPropagation(); };

const OrderItemOverview = ({ order }) => (
  <div>
    <div className={styles.main}>

      <div className={styles.row}>
        <div className={styles.left}>
          <Product order={order} />
        </div>
        <div className={styles.right}>
          <div className={styles.price}>
            <PriceWEdit order={order} layout="vertical" />
          </div>
          <span>×</span>
          <div className={styles.quantity}>
            <QuantityWEdit order={order} layout="vertical" />
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.left}>
          <Side order={order} />
          <span className={styles.leverage}>
            <Leverage order={order} />
          </span>
        </div>
        <div className={styles.right}>
          <div className={styles.progress}>
            <Progress order={order} />
          </div>
          <div className={styles.cancel}>
            <StatusCancel order={order} layout="vertical" />
          </div>
        </div>
      </div>
    </div>
    {/* eslint-disable jsx-a11y/no-static-element-interactions */}
    <div className={styles.box} onClick={stop}>
      <CancelConfirmBox order={order} />
      <EditConfirmBox order={order} />
      <EditErrBox order={order} />
    </div>
  </div>
);

OrderItemOverview.propTypes = {
  order: PropTypes.shape({}).isRequired,
};

export default OrderItemOverview;
