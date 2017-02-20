import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const ChartsMessage = () => (
  <div className={styles.main}>
    <p className={styles.message}>
      {translate.t('charts:not-ready')}
    </p>
  </div>
);

export default ChartsMessage;
