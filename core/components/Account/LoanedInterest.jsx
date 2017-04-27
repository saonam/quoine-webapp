import PropTypes from 'prop-types';
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
  account: PropTypes.shape({
    loaned: PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountLoanedInterest;
