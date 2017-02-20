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
  order: React.PropTypes.shape({
    leverageUnwound: React.PropTypes.number,
    leverage: React.PropTypes.number,
  }).isRequired,
};

export default OrderLeverage;
