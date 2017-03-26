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
  name: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  option: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default RadioInputView;
