import React from 'react';

import styles from './styles.css';

const InfoVertical = ({ children, label }) => (
  <div>
    <h1 className={styles.label}>{label || <span>&nbsp;</span>}</h1>
    <h1 className={styles.value}>{children}</h1>
  </div>
);

InfoVertical.propTypes = {
  children: React.PropTypes.node.isRequired,
  label: React.PropTypes.node,
};

export default InfoVertical;
