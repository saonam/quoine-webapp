import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const Label = ({ id, label }) => (
  <label className={styles.main} htmlFor={id}>
    {label}
  </label>
);

Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node.isRequired,
};

export default Label;
