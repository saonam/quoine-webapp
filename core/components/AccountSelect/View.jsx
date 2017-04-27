import PropTypes from 'prop-types';
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AccountSelect;
