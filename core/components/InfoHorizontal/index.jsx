import React from 'react';

import styles from './styles.css';

const InfoHorizontal = ({ children, label }) => (
  <div className={styles.main}>
    <span className={styles.label}>{label}</span>
    <span className={styles.value}>{children}</span>
  </div>
);

InfoHorizontal.propTypes = {
  children: React.PropTypes.node.isRequired,
  label: React.PropTypes.node.isRequired,
};

export default InfoHorizontal;
