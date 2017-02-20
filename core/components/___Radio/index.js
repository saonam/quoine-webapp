import React from 'react';

// a

import styles from './styles.css';

const Radio = ({ id, checked, children, ...others }) => (
  <div className={styles.main} >
    <div className={styles.wrapper}>
      <div className={`${styles.check} ${checked ? '' : styles.hide}`} />
      <input
        type="radio" id={id} className={styles.input} checked={checked} {...others}
      />
    </div>
    <label className={styles.label} htmlFor={id}>{children}</label>
  </div>
);

Radio.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.any.isRequired,
  name: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired,
  value: React.PropTypes.any.isRequired,
};

export default Radio;
