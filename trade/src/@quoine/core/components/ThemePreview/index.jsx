import React from 'react';

import Money from '@quoine/components/Money';

import styles from './styles.css';

const ThemePreview = ({ theme }) => (
  <div className={theme === 'light' ? '' : styles[theme]}>
    <div className={styles.background}>
      <h1 className={styles.heading}>
        <span className={styles['accent-light']}>BTC</span>
        <span className={styles.accent}>JPY</span>
      </h1>
      <div className={styles.panel}>
        <div className={styles.row}>
          <span className={styles.value}>Text</span>
          <span className={styles.positive}>
            <Money value={55123} currency="JPY" />
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Label</span>
          <span className={styles.negative}>
            <Money value={55123} currency="JPY" />
          </span>
        </div>
      </div>
    </div>
  </div>
);

ThemePreview.propTypes = {
  theme: React.PropTypes.string.isRequired,
};

export default ThemePreview;
