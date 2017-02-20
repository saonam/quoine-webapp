import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoHorizontal';
import {
  Balance, LoanOffers, Loaned, LoanedInterest,
} from '@quoine/components/Account';

import styles from './styles.css';

const BalanceBody = ({ account }) => (
  <div className={styles.main}>
    <Info label={translate('account:balance')}>
      <Balance account={account} />
    </Info>
    <Info label={`└ ${translate('account:loan-offers')}`}>
      <LoanOffers account={account} />
    </Info>
    <Info label={translate('account:loaned')}>
      <Loaned account={account} />
    </Info>
    <Info label={translate('account:loaned-interest')}>
      <LoanedInterest account={account} />
    </Info>
  </div>
);

BalanceBody.propTypes = {
  account: React.PropTypes.shape({}).isRequired,
};

export default BalanceBody;
