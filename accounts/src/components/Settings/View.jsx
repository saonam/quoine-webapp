import React from 'react';

import Menu from 'components/Settings/Menu';

import styles from './styles.css';

const SettingsView = ({ children }) => (
  <div className={styles.main}>
    <div className={styles.menu}>
      <Menu />
    </div>
    <div className={styles.children}>
      {children}
    </div>
    <div className={styles.space} />
  </div>
);

SettingsView.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default SettingsView;
