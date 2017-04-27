import PropTypes from 'prop-types';
import React from 'react';

import AccountSelect from '@quoine/components/AccountSelect';
import Field from '@quoine/components/Field';

const AccountWrapperSelect = ({ label, account, onChange }) => (
  <Field label={label} layout="inline">
    <AccountSelect value={account.currency} onChange={onChange} />
  </Field>
);

AccountWrapperSelect.propTypes = {
  label: PropTypes.string.isRequired,
  account: PropTypes.shape({
    currency: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AccountWrapperSelect;
