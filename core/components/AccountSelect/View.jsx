import React from 'react';

import Select from '@quoine/components/Select';

const AccountSelect = ({ accounts, value, onChange }) => (
  <Select
    options={accounts.map(account => ({
      label: account, value: account,
    }))}
    value={value}
    onChange={onChange}
  />
);

AccountSelect.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  accounts: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default AccountSelect;
