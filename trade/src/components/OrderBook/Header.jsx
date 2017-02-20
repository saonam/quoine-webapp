import React from 'react';

import translate from '@quoine/translate';

import Header from '@quoine/components/Header';

const OrderBookHeader = ({ side }) => (
  <Header styleName="text hor-medium">
    {translate(`order-book:${side}`)}
  </Header>
);

OrderBookHeader.propTypes = {
  side: React.PropTypes.oneOf(['sells', 'buys']).isRequired,
};

export default OrderBookHeader;
