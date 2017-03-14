import React from 'react';

import Label from '@quoine/components/Label';

import styles from './styles.css';

const Input = ({ id, label, children, large, noBorder }) => (
  <div
    className={styles[`main-${large ? 'large' : 'normal'}`]}
    style={noBorder ? { boxShadow: 'none' } : null}
  >
    {label ? (
      <div className={styles.label}>
        <Label id={id} label={label} />
      </div>
    ) : null}
    <div className={styles.input}>
      {children}
    </div>
  </div>
);

Input.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.node,
  children: React.PropTypes.node.isRequired,
  large: React.PropTypes.bool,
  noBorder: React.PropTypes.bool,
};

Input.defaultProps = {
  large: false,
};

export default Input;
