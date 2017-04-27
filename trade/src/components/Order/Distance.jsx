import PropTypes from 'prop-types';
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
  order: PropTypes.shape({
    distance: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    distanceType: PropTypes.string.isRequired,
    quoteCurrency: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderDistance;
