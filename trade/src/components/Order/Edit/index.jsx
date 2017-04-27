import PropTypes from 'prop-types';
import React from 'react';

import Connector from './Connector';

const OrderEdit = ({ order, Element, ...others }) => (
  order.status === 'live' &&
  order.quantityFilled === 0 &&
  order.market !== 'futures' ? (
    <Connector order={order} Element={Element} {...others} />
  ) : (
    <Element order={order} />
  )
);

OrderEdit.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string.isRequired,
    quantityFilled: PropTypes.number.isRequired,
  }).isRequired,
  Element: PropTypes.func.isRequired,
};

export default OrderEdit;
