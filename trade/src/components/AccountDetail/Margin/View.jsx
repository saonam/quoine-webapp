import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoHorizontal';
import {
  Pnl, Balance, Equity, Margin, MarginCoverage,
} from '@quoine/components/Account';

const AccountDetailMargin = ({ account }) => (
  <div>
    <Info label={translate('account:pnl')}>
      {account ? <Pnl account={account} /> : ''}
    </Info>
    <Info label={translate('account:balance')}>
      {account ? <Balance account={account} /> : ''}
    </Info>
    <Info label={translate('account:equity')}>
      {account ? <Equity account={account} /> : ''}
    </Info>
    <Info label={translate('account:margin-used')}>
      {account ? <Margin account={account} type="used" /> : ''}
    </Info>
    <Info label={translate('account:margin-available')}>
      {account ? <Margin account={account} type="available" /> : ''}
    </Info>
    <Info label={translate('account:margin-coverage')}>
      {account ? <MarginCoverage account={account} /> : ''}
    </Info>
  </div>
);

AccountDetailMargin.propTypes = {
  account: React.PropTypes.shape({
    balance: React.PropTypes.number.isRequired,
    pnl: React.PropTypes.number.isRequired,
    equity: React.PropTypes.number.isRequired,
    marginUsed: React.PropTypes.number.isRequired,
    marginAvailable: React.PropTypes.number.isRequired,
    marginCoverage: React.PropTypes.number.isRequired,
  }),
};

export default AccountDetailMargin;
