import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const AccountLoaned = ({ account }) => {
  const value = account.loaned;
  return (
    <ColorFlashing value={value}>
      <Money value={value} currency={account.currency} />
    </ColorFlashing>
  );
};

AccountLoaned.propTypes = {
  account: PropTypes.shape({
    loaned: PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountLoaned;
