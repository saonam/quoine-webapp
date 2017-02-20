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
  order: React.PropTypes.shape({}).isRequired,
  layout: React.PropTypes.string.isRequired,
};

export default OrderQuantityWEdit;
