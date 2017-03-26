import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import { Balance } from '@quoine/components/Account';

const AccountDetailSpotItem = ({ currency, account }) => (
  <Field layout="justify" label={`${currency} ${translate('account:balance')}`}>
    {account ? <Balance account={account} /> : ''}
  </Field>
);

AccountDetailSpotItem.propTypes = {
  account: React.PropTypes.shape({
    balance: React.PropTypes.number.isRequired,
  }),
  currency: React.PropTypes.string.isRequired,
};

export default AccountDetailSpotItem;
