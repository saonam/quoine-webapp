import React from 'react';

import Blotter from '@quoine/components/Blotter';
import Item from 'components/OrderItem';
import Labels from 'components/OrderItem/Horizontal/Labels';

const OrderBlotter = (props) => (
  <Blotter
    onSetFilter={props.onSetFilter}
    filters={props.filters}
    filtersSelects={props.filtersSelects}
    namespace="order"
    // ===
    Labels={Labels}
    // ===
    collection={props.collection}
    Item={Item}
    // ===
    onLoad={props.onLoad}
    busy={props.busy}
    page={props.page}
    // ===
    horizontal={props.horizontal}
  />
);

// eslint-disable-next-line no-unused-vars
const { namespace, Item: a, Labels: b, ...propTypes } = Blotter.propTypes;
OrderBlotter.propTypes = propTypes;

export default OrderBlotter;
