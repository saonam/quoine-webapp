import React from 'react';

import translate from '@quoine/translate';

import AccountSelect from '@quoine/components/AccountSelect';
import Field from '@quoine/components/Field';

const AccountWrapperSelect = ({ account, onChange }) => (
  <Field label={translate('fund:account')} layout="inline">
    <AccountSelect value={account.currency} onChange={onChange} />
  </Field>
);

AccountWrapperSelect.propTypes = {
  account: React.PropTypes.shape({
    currency: React.PropTypes.string.isRequired,
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default AccountWrapperSelect;
