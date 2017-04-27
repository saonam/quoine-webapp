import PropTypes from 'prop-types';
import React from 'react';

import Expander from '@quoine/components/Expander';
import Overview from 'components/OrderItem/Overview';
import Detail from 'components/OrderItem/Detail';

const OrderItem = ({ order }) => (
  <Expander Overview={Overview} Detail={Detail} order={order} />
);

OrderItem.propTypes = {
  order: PropTypes.shape({}).isRequired,
};

export default OrderItem;
