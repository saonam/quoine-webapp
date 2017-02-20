import React from 'react';

import Select from '../ThemeSelect';

import styles from './styles.css';

const ThemeBody = () => (
  <div className={styles.body}>
    <Select direction="column" />
  </div>
);

export default ThemeBody;
