import React from 'react';

import Blotter from '@quoine/components/Blotter';
import Item from 'components/TransactionItem';

const TransList = (props) => (
  <Blotter
    onSetFilter={props.onSetFilter}
    filters={props.filters}
    filtersSelects={props.filtersSelects}
    namespace="trans"
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
TransList.propTypes = propTypes;

export default TransList;
