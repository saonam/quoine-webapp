import React from 'react';

import Money from '@quoine/components/Money';
import Percentage from '@quoine/components/Percentage';

const OrderDistance = ({ order }) => (
  order.distanceType === 'fiat' ? (
    <Money value={order.distance} currency={order.quoteCurrency} />
  ) : (
    <Percentage value={order.distance} />
  )
);

OrderDistance.propTypes = {
  order: React.PropTypes.shape({
    distance: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
    ]).isRequired,
    distanceType: React.PropTypes.string.isRequired,
    quoteCurrency: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderDistance;
