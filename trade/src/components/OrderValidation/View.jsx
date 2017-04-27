import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const OrderValidation = ({ className, error, validation }) => {
  const message = error ? error.message : validation;
  if (!message) { return null; }
  return (
    <p className={`${styles.main} ${className}`}>
      {translate(message)}
    </p>
  );
};

OrderValidation.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  validation: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default OrderValidation;
