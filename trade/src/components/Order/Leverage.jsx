import PropTypes from 'prop-types';
import React from 'react';

import Dash from '@quoine/components/Dash';

const OrderLeverage = ({ order }) => {
  const leverage = order.leverageUnwound || order.leverage;
  if (!leverage || leverage === 1) {
    return <Dash />;
  }
  return (
    <span>{leverage}x</span>
  );
};

OrderLeverage.propTypes = {
  order: PropTypes.shape({
    leverageUnwound: PropTypes.number,
    leverage: PropTypes.number,
  }).isRequired,
};

export default OrderLeverage;
