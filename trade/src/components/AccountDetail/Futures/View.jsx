import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoHorizontal';
import { Pnl, Balance, Margin } from '@quoine/components/Account';

const AccountDetailMargin = ({ account }) => (
  <div>
    <Info label={translate('account:balance-wallet')}>
      {account ? <Balance account={account} /> : ''}
    </Info>
    <Info label={translate('account:margin-withdrawable')}>
      {account ? <Margin account={account} type="available" /> : ''}
    </Info>
    <Info label={translate('account:pnl-realised')}>
      {account ? <Pnl account={account} type="realised" /> : ''}
    </Info>
    <Info label={translate('account:pnl-unrealised')}>
      {account ? <Pnl account={account} /> : ''}
    </Info>
  </div>
);

AccountDetailMargin.propTypes = {
  account: React.PropTypes.shape({
    balance: React.PropTypes.number.isRequired,
    pnl: React.PropTypes.number.isRequired,
    pnlRealised: React.PropTypes.number.isRequired,
    marginAvailable: React.PropTypes.number.isRequired,
  }),
};

export default AccountDetailMargin;
