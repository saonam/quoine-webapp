import React from 'react';

import Money from '@quoine/components/Money';
import Dash from '@quoine/components/Dash';

const OrderInterest = ({ order }) => (
  order.marginInterest ? (
    <Money value={order.marginInterest} currency={order.account} />
  ) : <Dash />
);

OrderInterest.propTypes = {
  order: React.PropTypes.shape({
    marginInterest: React.PropTypes.number.isRequired,
    account: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderInterest;
