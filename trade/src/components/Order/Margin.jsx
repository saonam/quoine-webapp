import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import Dash from '@quoine/components/Dash';

const OrderMargin = ({ order }) => (
  order.marginUsed ? (
    <Money value={order.marginUsed} currency={order.account} />
  ) : <Dash />
);

OrderMargin.propTypes = {
  order: PropTypes.shape({
    marginUsed: PropTypes.number.isRequired,
    account: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderMargin;
