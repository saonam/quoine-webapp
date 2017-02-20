import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

const getValueKey = (type) => {
  switch (type) {
    case 'available': return 'Available';
    case 'used': return 'Used';
    default: return '';
  }
};

const AccountMargin = ({ account, type }) => {
  const value = account[`margin${getValueKey(type)}`];
  return (
    <ColorFlashing value={value}>
      <Money value={value} currency={account.currency} />
    </ColorFlashing>
  );
};

AccountMargin.propTypes = {
  account: React.PropTypes.shape({
    marginAvailable: React.PropTypes.number.isRequired,
    marginUsed: React.PropTypes.number.isRequired,
  }).isRequired,
  type: React.PropTypes.oneOf(['available', 'used']),
};

export default AccountMargin;
