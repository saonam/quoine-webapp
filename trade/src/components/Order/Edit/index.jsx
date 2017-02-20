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
  order: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
    quantityFilled: React.PropTypes.number.isRequired,
  }).isRequired,
  Element: React.PropTypes.func.isRequired,
};

export default OrderEdit;
