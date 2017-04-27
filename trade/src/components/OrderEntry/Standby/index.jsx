import PropTypes from 'prop-types';
import React from 'react';

import Form from 'components/OrderEntry/Form';
import Button from 'components/OrderEntry/Button';
import Calculation from 'components/OrderCalculation';
import Validation from 'components/OrderValidation';

import styles from './styles.css';

const OrderEntryStandby = ({ form }) => (
  <div>
    <div className={styles.item}>
      <Form form={form} />
    </div>
    <div className={styles.item}>
      <Calculation form={form} />
    </div>
    <div className={styles.buttons}>
      <div className={styles.button}>
        <Button form={form} side="sell" />
      </div>
      <div className={styles.button}>
        <Button form={form} side="buy" />
      </div>
    </div>
    <Validation className={styles.item} form={form} />
  </div>
);

OrderEntryStandby.propTypes = {
  form: PropTypes.shape({}).isRequired,
};

export default OrderEntryStandby;
