import PropTypes from 'prop-types';
import React from 'react';

import NavigationSidebar from '@quoine/components/NavigationSidebar';
import ThemeSidebar from '@quoine/components/ThemeSidebar';
import Logo from '@quoine/components/Logo';
import HelpButton from '@quoine/components/HelpButton';

import styles from './styles.css';

const AppMenu = ({ children, maintenance }) => (
  <div className={styles.main}>
    {!maintenance && (
    <div>
      <NavigationSidebar />
    </div>)}
    <div><Logo /></div>

    <div className={styles.children}>
      {!maintenance && children}
    </div>

    <div className={styles.icons}>
      {!maintenance && (
      <div className={styles.icon}>
        <ThemeSidebar />
      </div>)}

      <div className={styles.icon}>
        <HelpButton isIcon />
      </div>
    </div>
  </div>
);

AppMenu.propTypes = {
  children: PropTypes.node,
};

export default AppMenu;
