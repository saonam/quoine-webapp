import React from 'react';

import translate from '@quoine/translate';

import Tabs from '@quoine/components/Tabs';

import Fund from 'components/Fund';
import Withdrawal from 'components/Withdrawal';

import styles from './styles.css';

const Transfer = () => (
  <div className={styles.main}>
    <Tabs
      name="transfer"
      panels={[
        {
          id: 'fund',
          Element: Fund,
          color: 'positive',
          label: translate('fund:title'),
        },
        {
          id: 'withdrawal',
          Element: Withdrawal,
          color: 'negative',
          label: translate('withdrawal:title'),
        },
      ]}
    />
  </div>
);

export default Transfer;
