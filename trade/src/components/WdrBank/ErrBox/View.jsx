import React from 'react';

import ErrWrapper from '@quoine/components/ErrWrapper';

import styles from './styles.css';

const WdrBankErrBox = ({ onDismiss, error, bank }) => (
  error && error.id === bank.id ? (
    <div className={styles.main}>
      <ErrWrapper
        onDismiss={onDismiss}
        layout="box"
        message={error.message}
      />
    </div>
  ) : null
);

WdrBankErrBox.propTypes = {
  onDismiss: React.PropTypes.func.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  bank: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default WdrBankErrBox;
