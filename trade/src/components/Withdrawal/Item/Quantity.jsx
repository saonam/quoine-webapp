import React from 'react';

import Money from '@quoine/components/Money';

const WdrItemQuantity = ({ withdrawal }) => (
  <Money currency={withdrawal.account} value={withdrawal.amount} />
);

WdrItemQuantity.propTypes = {
  withdrawal: React.PropTypes.shape({}).isRequired,
};

export default WdrItemQuantity;
