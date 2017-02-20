import React from 'react';

import Connect from './Connect';

class OrderBookItem extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <Connect {...this.props} />
    );
  }
}

export default OrderBookItem;
