import React from 'react';

import {
  Pnl, Balance, Equity, Margin, MarginCoverage,
} from '@quoine/components/Account';
import Field from 'components/AccountDetail/Field';

const AccountDetailMargin = ({ account }) => (
  <div>
    <Field id="pnl">
      {account ? <Pnl account={account} /> : ''}
    </Field>
    <Field id="balance">
      {account ? <Balance account={account} /> : ''}
    </Field>
    <Field id="equity">
      {account ? <Equity account={account} /> : ''}
    </Field>
    <Field id="margin-used">
      {account ? <Margin account={account} type="used" /> : ''}
    </Field>
    <Field id="margin-available">
      {account ? <Margin account={account} type="available" /> : ''}
    </Field>
    <Field id="margin-coverage">
      {account ? <MarginCoverage account={account} /> : ''}
    </Field>
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
