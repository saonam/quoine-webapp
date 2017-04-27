import PropTypes from 'prop-types';
import React from 'react';

import { Quantity, Edit } from 'components/Order';

const OrderQuantityWEdit = ({ order, layout }) => (
  <Edit
    Element={Quantity}
    order={order}
    target="quantity"
    layout={layout}
  />
);

OrderQuantityWEdit.propTypes = {
  order: PropTypes.shape({}).isRequired,
  layout: PropTypes.string.isRequired,
};

export default OrderQuantityWEdit;
