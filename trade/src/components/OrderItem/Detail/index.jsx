import React from 'react';
import translate from '@quoine/translate';

import {
  Created,
  Id,
  Price,
  Quantity,
  Type,
} from 'components/Order';

import styles from './styles.css';

const OrderItemDetail = ({ order }) => (
  <div className={styles.main}>
    <div className={styles.col}>
      <div>
        <span>{translate('order:id')}: </span>
        <Id order={order} />
      </div>
      <div>
        <span>{translate('order:type')}: </span>
        <Type order={order} />
      </div>
      <div>
        <span>{translate('order:created-at')}: </span>
        <Created order={order} />
      </div>
    </div>
    <div className={styles.col}>
      <div>
        <span>{translate('order:qty-disc')}: </span>
        <Quantity order={order} type="disclose" />
      </div>
      <div>
        <span>{translate('order:qty-filled')}: </span>
        <Quantity order={order} type="filled" />
      </div>
      <div>
        <span>{translate('order:price-avg')}: </span>
        <Price order={order} type="average" />
      </div>
    </div>
  </div>
);

OrderItemDetail.propTypes = {
  order: React.PropTypes.shape({}).isRequired,
};

export default OrderItemDetail;
