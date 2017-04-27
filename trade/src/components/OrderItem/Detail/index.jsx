import PropTypes from 'prop-types';
import React from 'react';

import {
  Created,
  Id,
  Price,
  Quantity,
  Type,
} from 'components/Order';

import Field from './Field';

import styles from './styles.css';

const OrderItemDetail = ({ order }) => (
  <div className={styles.main}>
    <div className={styles.col}>
      <Field id="id"><Id order={order} /></Field>
      <Field id="type"><Type order={order} /></Field>
      <Field id="created-at"><Created order={order} /></Field>
    </div>
    <div className={styles.col}>
      <Field id="qty-disc"><Quantity order={order} type="disclose" /></Field>
      <Field id="qty-filled"><Quantity order={order} type="filled" /></Field>
      <Field id="price-avg"><Price order={order} type="average" /></Field>
    </div>
  </div>
);

OrderItemDetail.propTypes = {
  order: PropTypes.shape({}).isRequired,
};

export default OrderItemDetail;
