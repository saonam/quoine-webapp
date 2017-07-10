import React from 'react';
import { Link } from 'react-router';

import translate from '@quoine/translate';

import styles from './styles.css';

const menu = ['application', 'profile', 'security'];
if (process.env.REACT_APP_VENDOR === 'quoine' || process.env.REACT_APP_VENDOR === 'qryptos') {
  menu.push('api');
}
if (process.env.REACT_APP_VENDOR === 'quoine') {
  menu.push('ip');
}

const SettingsMenu = () => (
  <ul className={styles.main}>
    {menu.map(item => (
      <li key={item}>
        <Link
          to={`/settings/${item}`}
          className={styles.link} activeClassName={styles.active}
        >
          {translate(`settings:${item}-title`)}
        </Link>
      </li>
    ))}
  </ul>
);

export default SettingsMenu;
