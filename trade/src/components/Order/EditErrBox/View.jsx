import PropTypes from 'prop-types';
import React from 'react';

import ErrWrapper from '@quoine/components/ErrWrapper';

import styles from './styles.css';

const OrderEditErrBoxView = ({ onDismiss, error, order }) => (
  error && error.id === order.id ? (
    <div className={styles.main}>
      <ErrWrapper
        onDismiss={onDismiss}
        layout="box"
        message={error.message}
      />
    </div>
  ) : null
);

OrderEditErrBoxView.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  order: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
  }).isRequired,
};

export default OrderEditErrBoxView;
