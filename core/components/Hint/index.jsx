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
  children: React.PropTypes.node.isRequired,
  label: React.PropTypes.node,
  style: React.PropTypes.shape({}),
};

export default Hint;
