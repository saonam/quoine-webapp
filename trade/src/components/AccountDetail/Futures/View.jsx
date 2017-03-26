import React from 'react';

import { Pnl, Balance, Margin } from '@quoine/components/Account';
import Field from 'components/AccountDetail/Field';

const AccountDetailMargin = ({ account }) => (
  <div>
    <Field id="balance-wallet">
      {account ? <Balance account={account} /> : ''}
    </Field>
    <Field id="margin-withdrawable">
      {account ? <Margin account={account} type="available" /> : ''}
    </Field>
    <Field id="pnl-realised">
      {account ? <Pnl account={account} type="realised" /> : ''}
    </Field>
    <Field id="pnl-unrealised">
      {account ? <Pnl account={account} /> : ''}
    </Field>
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
