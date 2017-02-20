import React from 'react';

import styles from './styles.css';

const InfoInline = ({ children, label }) => (
  <span className={styles.main}>
    <span className={styles.label}>{label}:</span>
    <span className={styles.value}>{children}</span>
  </span>
);

InfoInline.propTypes = {
  children: React.PropTypes.node.isRequired,
  label: React.PropTypes.node.isRequired,
};

export default InfoInline;
