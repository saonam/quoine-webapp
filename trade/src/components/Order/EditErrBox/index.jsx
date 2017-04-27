import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const OrderEditErrBox = ({ order }) => (
  order.status === 'live' && order.quantityFilled === 0 ? (
    <Connector order={order} />
  ) : null
);

OrderEditErrBox.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string.isRequired,
    quantityFilled: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderEditErrBox;
