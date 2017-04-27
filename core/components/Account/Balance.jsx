import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const AccountBalance = ({ account }) => {
  const value = account.balance;
  return (
    <ColorFlashing value={value}>
      <Money value={value} currency={account.currency} />
    </ColorFlashing>
  );
};

AccountBalance.propTypes = {
  account: PropTypes.shape({
    balance: PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountBalance;
