import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const AccountEquity = ({ account }) => {
  const value = account.equity;
  return (
    <ColorFlashing value={value}>
      <Money value={value} currency={account.currency} />
    </ColorFlashing>
  );
};

AccountEquity.propTypes = {
  account: React.PropTypes.shape({
    equity: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountEquity;
