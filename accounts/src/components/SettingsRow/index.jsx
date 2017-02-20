import React from 'react';

import styles from './styles.css';

const SettingsRow = ({ label, children }) => (
  <div className={styles.main}>
    <h1 className={styles.label}>
      {label}
    </h1>
    <div className={styles.children}>
      {children}
    </div>
  </div>
);

SettingsRow.propTypes = {
  label: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default SettingsRow;
