import React from 'react';

import styles from './styles.css';

const InfoHighlight = ({ children, label }) => (
  <div className={styles.main}>
    <h1 className={styles.value}>{children}</h1>
    <h1 className={styles.label}>{label}</h1>
  </div>
);

InfoHighlight.propTypes = {
  children: React.PropTypes.node.isRequired,
  label: React.PropTypes.node.isRequired,
};

export default InfoHighlight;
