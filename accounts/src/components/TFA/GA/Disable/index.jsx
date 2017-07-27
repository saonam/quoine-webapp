import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const createMarkup = () => ({
  __html: translate('tfa-manage:disable-description'),
});

const TFAGADisable = () => (
  // eslint-disable-next-line react/no-danger
  <div className={styles.main} dangerouslySetInnerHTML={createMarkup()} />
);

export default TFAGADisable;
