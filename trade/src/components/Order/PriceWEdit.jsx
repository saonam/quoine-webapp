import PropTypes from 'prop-types';
import React from 'react';

import { Price, Edit } from 'components/Order';

const OrderPriceWEdit = ({ order, layout }) => (
  <Edit
    Element={Price}
    order={order}
    target="price"
    layout={layout}
  />
);

OrderPriceWEdit.propTypes = {
  order: PropTypes.shape({}).isRequired,
  layout: PropTypes.string.isRequired,
};

export default OrderPriceWEdit;
