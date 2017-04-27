import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const Hint = ({ label, children, style }) => (
  <span className={styles.main} >
    <span className={styles.hint} style={style}>{children}</span>
    <span className={styles.label}>
      {label || <span className={styles.default}>(?)</span>}
    </span>
  </span>
);

Hint.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node,
  style: PropTypes.shape({}),
};

export default Hint;
