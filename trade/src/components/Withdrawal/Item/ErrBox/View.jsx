import PropTypes from 'prop-types';
import React from 'react';

import ErrWrapper from '@quoine/components/ErrWrapper';

import styles from './styles.css';

const WdrErrBox = ({ onDismiss, error, withdrawal }) => (
  error && error.id === withdrawal.id ? (
    <div className={styles.main}>
      <ErrWrapper
        onDismiss={onDismiss}
        layout="box"
        message={error.message}
      />
    </div>
  ) : null
);

WdrErrBox.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  withdrawal: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default WdrErrBox;
