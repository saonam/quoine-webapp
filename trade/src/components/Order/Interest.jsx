import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import Dash from '@quoine/components/Dash';

const OrderInterest = ({ order }) => (
  order.marginInterest ? (
    <Money value={order.marginInterest} currency={order.account} />
  ) : <Dash />
);

OrderInterest.propTypes = {
  order: PropTypes.shape({
    marginInterest: PropTypes.number.isRequired,
    account: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderInterest;
