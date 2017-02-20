import React from 'react';

import Icon from '../Icon';

import styles from './styles.css';

const LoadingIcon = () => (
  <div className={styles.main}>
    <Icon glyph="loading-background" className={styles.background} />
    <Icon glyph="loading-indicator" className={styles.indicator} />
  </div>
);

export default LoadingIcon;
