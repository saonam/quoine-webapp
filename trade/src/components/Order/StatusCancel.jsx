import PropTypes from 'prop-types';
import React from 'react';

import Color from '@quoine/components/Color';

import { Cancel, Status } from 'components/Order';

const OrderStatusCancel = ({ order, ...others }) => (
  order.status === 'live' ? (
    <Cancel order={order} {...others} />
  ) : (
    <Color styleName="primary-3">
      <Status order={order} />
    </Color>
  )
);

OrderStatusCancel.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderStatusCancel;
