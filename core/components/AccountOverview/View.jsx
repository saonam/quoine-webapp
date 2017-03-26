import React from 'react';

import t from '@quoine/translate';

import Field from '@quoine/components/Field';
import Hint from '@quoine/components/Hint';
import { Margin, Pnl, Balance } from '@quoine/components/Account';

import styles from './styles.css';

const AccountOverview = ({ account }) => (
  account ? (
    <div className={styles.main}>
      <div className={styles.currency}>
        {account.currency === 'XBT' ? (
          <span>
            BTC F<Hint style={{ width: 200, left: -50 }} label="(?)">{t('account:hint-futures')}</Hint>
          </span>
        ) : account.currency}
      </div>
      <div className={styles.balance}>
        <Field
          label={t('account:balance')}
          layout="reverse"
        >
          <Balance account={account} />
        </Field>
      </div>
      <div className={styles.pnl}>
        <Field
          label={t('account:pnl')}
          layout="reverse"
        >
          <Pnl account={account} />
        </Field>
      </div>
      <div className={styles.margin}>
        <Field
          label={t('account:margin-used')}
          layout="reverse"
        >
          <Margin type="used" account={account} />
        </Field>
      </div>
    </div>
  ) : null
);

AccountOverview.propTypes = {
  account: React.PropTypes.shape({
    balance: React.PropTypes.number.isRequired,
    pnl: React.PropTypes.number.isRequired,
    marginCoverage: React.PropTypes.number.isRequired,
  }),
};

export default AccountOverview;
