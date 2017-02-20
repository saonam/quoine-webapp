import React from 'react';

import Money from '@quoine/components/Money';
import Dash from '@quoine/components/Dash';

const OrderMargin = ({ order }) => (
  order.marginUsed ? (
    <Money value={order.marginUsed} currency={order.account} />
  ) : <Dash />
);

OrderMargin.propTypes = {
  order: React.PropTypes.shape({
    marginUsed: React.PropTypes.number.isRequired,
    account: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderMargin;
