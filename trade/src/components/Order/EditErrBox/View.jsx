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
  onDismiss: React.PropTypes.func.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  order: React.PropTypes.shape({
    id: React.PropTypes.oneOfType([
      React.PropTypes.number.isRequired,
      React.PropTypes.string.isRequired,
    ]),
  }).isRequired,
};

export default OrderEditErrBoxView;
