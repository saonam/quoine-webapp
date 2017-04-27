import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const AccountLoanOffers = ({ account }) => {
  const value = account.loanOffers;
  return (
    <ColorFlashing value={value}>
      <Money value={value} currency={account.currency} />
    </ColorFlashing>
  );
};

AccountLoanOffers.propTypes = {
  account: PropTypes.shape({
    loanOffers: PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountLoanOffers;
