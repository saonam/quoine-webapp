import PropTypes from 'prop-types';
import React from 'react';

import Loading from '@quoine/components/LoadingIconWrapper';
import AppMenu from '@quoine/components/AppMenu';
import Notifications from '@quoine/components/Notifications';

import styles from './styles.css';

const AppFrame = ({ busy, theme, menu, body }) => (
  <div className={`${styles.wrapper} ${theme}`}>
    {busy ? <Loading /> : (
      <div className={styles.main}>
        <div className={styles.notifications}>
          <Notifications />
        </div>
        <div className={styles.menu}>
          <AppMenu>{menu}</AppMenu>
        </div>
        <div className={styles.body}>
          {body}
        </div>
        <div id="app-modal" className={styles.modal} />
      </div>
    )}
  </div>
);

AppFrame.propTypes = {
  busy: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  // ===
  body: PropTypes.element.isRequired,
  menu: PropTypes.element,
};

export default AppFrame;
