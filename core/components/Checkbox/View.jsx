import React from 'react';

import Icon from '../Icon';

import styles from './styles.css';

// use children for label to allow complex label (eg: with link)
const CheckBoxView = ({ id, children, value, onChange, ...others }) => (
  <div className={styles.main} >
    <div className={styles.box}>
      {value ? (
        <div className={styles.icon}>
          <Icon glyph="check" width={18} height={18} />
        </div>
      ) : null}
      <input
        className={styles.input} id={id} type="checkbox"
        onChange={onChange} checked={value}
        {...others}
      />
    </div>
    <label className={styles.label} htmlFor={id}>{children}</label>
  </div>
);

CheckBoxView.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  value: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default CheckBoxView;
