import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const ErrorMessage = ({ error, className }) => (
  error ? (
    <p className={`${styles.main} ${className}`}>
      {translate(error.message)}
    </p>
  ) : null
);

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
  ]).isRequired,
  className: PropTypes.string,
};

export default ErrorMessage;
