import React from 'react';

import SelectInput from '@quoine/components/SelectInput';

const AccountSelect = ({ accounts, value, onChange }) => (
  <SelectInput
    options={accounts.map(account => ({
      label: account === 'XBT' ? 'BTC (Futures)' : account,
      value: account,
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
