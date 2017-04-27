import PropTypes from 'prop-types';
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default InputInline;
