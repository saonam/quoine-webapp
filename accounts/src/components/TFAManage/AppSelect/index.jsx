import React from 'react';

import translate from '@quoine/translate';

import Button from './Button';

import styles from './styles.css';

const apps = ['authy', 'ga'];

const TFAManageAppSelect = (props) => (
  <div className={styles.main}>
    <div className={styles.description}>
      {translate('tfa-manage:app-select-description')}
    </div>
    <div className={styles.items}>
      {apps.map(app => (
        <div key={app} className={styles.item}>
          <Button app={app} {...props} />
        </div>
      ))}
    </div>
  </div>
);

export default TFAManageAppSelect;
