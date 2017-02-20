import React from 'react';

import t from '@quoine/translate';

import Info from '@quoine/components/InfoHighlight';
import { Margin, Pnl, Balance } from '@quoine/components/Account';

import styles from './styles.css';

const AccountOverview = ({ account }) => (
  account ? (
    <div className={styles.main}>
      <div className={styles.currency}>
        {account.currency}
      </div>
      <div className={styles.balance}>
        <Info label={t('account:balance')}>
          <Balance account={account} />
        </Info>
      </div>
      <div className={styles.pnl}>
        <Info label={t('account:pnl')}>
          <Pnl account={account} />
        </Info>
      </div>
      <div className={styles.margin}>
        <Info label={t('account:margin-used')}>
          <Margin type="used" account={account} />
        </Info>
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
