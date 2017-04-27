import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

// use children for label to allow complex label (eg: with link)
const RadioInputView = ({
  name, value, children, option, onChange, ...others
}) => (
  <div className={styles.main} >
    <div className={styles.box}>
      {value === option ? (
        <div className={styles.icon} />
      ) : null}
      <input
        id={`${name}-${option}`}
        name={name}
        value={option}
        type="radio"
        className={styles.input}
        onChange={onChange}
        {...others}
      />
    </div>
    <label
      className={styles.label}
      htmlFor={`${name}-${option}`}
    >
      {children}
    </label>
  </div>
);

RadioInputView.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  option: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioInputView;
