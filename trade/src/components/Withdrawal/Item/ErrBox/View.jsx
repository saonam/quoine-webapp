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
  onDismiss: React.PropTypes.func.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  withdrawal: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default WdrErrBox;
