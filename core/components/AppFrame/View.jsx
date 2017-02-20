import React from 'react';

import Loading from '@quoine/components/LoadingIconWrapper';
import AppMenu from '@quoine/components/AppMenu';

import styles from './styles.css';

const AppFrame = ({ busy, theme, menu, body }) => (
  <div className={`${styles.wrapper} ${theme}`}>
    {busy ? <Loading /> : (
      <div className={styles.main}>
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
  busy: React.PropTypes.bool.isRequired,
  theme: React.PropTypes.string.isRequired,
  // ===
  body: React.PropTypes.element.isRequired,
  menu: React.PropTypes.element,
};

export default AppFrame;
