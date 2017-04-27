import PropTypes from 'prop-types';
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
  account: PropTypes.shape({
    balance: PropTypes.number.isRequired,
    pnl: PropTypes.number.isRequired,
    pnlRealised: PropTypes.number.isRequired,
    marginAvailable: PropTypes.number.isRequired,
  }),
};

export default AccountDetailMargin;
