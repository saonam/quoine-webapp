import React from 'react';

import translate from '@quoine/translate';

import Link from '@quoine/components/Link';

import styles from './styles.css';

const UserForm5 = () => (
  <div>
    <div className={styles.body}>
      <p className={styles.success}>
        {translate('sign-up:message-success')}
      </p>
    </div>

    <div className={styles.input}>
      <Link pathname="/sign-in" styleName="modal accent">
        {translate('sign-up:action-sign-in')}
      </Link>
    </div>
  </div>
);

export default UserForm5;
