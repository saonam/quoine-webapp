import PropTypes from 'prop-types';
import React from 'react';

import ErrWrapper from '@quoine/components/ErrWrapper';

import styles from './styles.css';

const IpErrBox = ({ onDismiss, error, ip }) => (
  error && error.id === ip.id ? (
    <div className={styles.main}>
      <ErrWrapper
        layout="inline"
        onDismiss={onDismiss}
        message={error.message}
      />
    </div>
  ) : null
);

IpErrBox.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  ip: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default IpErrBox;
