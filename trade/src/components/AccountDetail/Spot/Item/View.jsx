import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoHorizontal';
import { Balance } from '@quoine/components/Account';

const AccountDetailSpotItem = ({ currency, account }) => (
  <Info label={`${currency} ${translate('account:balance')}`}>
    {account ? <Balance account={account} /> : ''}
  </Info>
);

AccountDetailSpotItem.propTypes = {
  account: React.PropTypes.shape({
    balance: React.PropTypes.number.isRequired,
  }),
  currency: React.PropTypes.string.isRequired,
};

export default AccountDetailSpotItem;
