import PropTypes from 'prop-types';
import React from 'react';

import Icon from '@quoine/components/Icon';

import styles from './styles.css';

// use children for label to allow complex label (eg: with link)
const CheckboxInputView = ({ id, children, value, onChange, ...others }) => (
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

CheckboxInputView.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxInputView;
