import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const AccountLoanedInterest = ({ account }) => {
  const value = account.loanedInterest;
  return (
    <ColorFlashing value={value}>
      <Money value={value} currency={account.currency} />
    </ColorFlashing>
  );
};

AccountLoanedInterest.propTypes = {
  account: React.PropTypes.shape({
    loaned: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountLoanedInterest;
