import PropTypes from 'prop-types';
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
  onDismiss: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  bank: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default WdrBankErrBox;
