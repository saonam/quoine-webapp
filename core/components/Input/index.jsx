import React from 'react';

import Label from '@quoine/components/Label';

import styles from './styles.css';

const Input = ({ id, label, children, large }) => (
  <div className={styles[`main-${large ? 'large' : 'normal'}`]}>
    <div className={styles.label}>
      <Label id={id} label={label} />
    </div>
    <div className={styles.input}>
      {children}
    </div>
  </div>
);

Input.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
  large: React.PropTypes.bool,
};

Input.defaultProps = {
  large: false,
};

export default Input;
