import PropTypes from 'prop-types';
import React from 'react';

import IconPadding from '@quoine/components/IconPadding';

const OrderEditPadding = ({ order }) => (
  order.status === 'live' &&
  order.quantityFilled === 0 &&
  order.market !== 'futures' ? null : (
    <IconPadding />
  )
);

OrderEditPadding.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderEditPadding;
