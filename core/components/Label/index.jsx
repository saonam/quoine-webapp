import React from 'react';

import styles from './styles.css';

const Label = ({ id, label }) => (
  <label className={styles.main} htmlFor={id}>
    {label}
  </label>
);

Label.propTypes = {
  id: React.PropTypes.string.isRequired,
  label: React.PropTypes.node.isRequired,
};

export default Label;
