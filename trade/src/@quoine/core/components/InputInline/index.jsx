import React from 'react';

import styles from './styles.css';

const InputInline = ({ id, label, children }) => (
  <div className={styles.main}>
    <label htmlFor={id} className={styles.label}>
      {`${label}:`}&nbsp;
    </label>
    <div className={styles.input}>
      {React.cloneElement(children, { id })}
    </div>
  </div>
);

InputInline.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default InputInline;
