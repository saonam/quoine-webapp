import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const Body5 = () => (
  <p className={styles.successMessage}>
    {translate('sign-up:success-message')}
  </p>
);

export default Body5;
