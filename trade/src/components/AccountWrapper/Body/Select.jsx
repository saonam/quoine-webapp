import React from 'react';

import AccountSelect from '@quoine/components/AccountSelect';
import Field from '@quoine/components/Field';

const AccountWrapperSelect = ({ label, account, onChange }) => (
  <Field label={label} layout="inline">
    <AccountSelect value={account.currency} onChange={onChange} />
  </Field>
);

AccountWrapperSelect.propTypes = {
  label: React.PropTypes.string.isRequired,
  account: React.PropTypes.shape({
    currency: React.PropTypes.string.isRequired,
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default AccountWrapperSelect;
