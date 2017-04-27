import PropTypes from 'prop-types';
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
  account: PropTypes.shape({
    balance: PropTypes.number.isRequired,
  }),
  currency: PropTypes.string.isRequired,
};

export default AccountDetailSpotItem;
