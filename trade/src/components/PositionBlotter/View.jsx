import React from 'react';

import Blotter from '@quoine/components/Blotter';
import Item from 'components/PositionItem';
import Labels from 'components/PositionItem/Horizontal/Labels';

const PositionBlotter = (props) => (
  <Blotter
    onSetFilter={props.onSetFilter}
    filters={props.filters}
    filtersSelects={props.filtersSelects}
    namespace="position"
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
PositionBlotter.propTypes = propTypes;

export default PositionBlotter;
