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
  error: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  validation: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
};

export default OrderValidation;
