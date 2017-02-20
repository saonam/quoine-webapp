import React from 'react';

import Filter from './Filter';
import Body from './Body';
import LoadButton from './LoadButton';

import styles from './styles.css';

const BlotterView = ({
  filters, filtersSelects, onSetFilter, namespace, Labels,
  collection, onLoad, horizontal, busy, Item, page,
}) => (
  <div className={styles.main}>
    <div className={styles.header}>
      {horizontal ? <Labels /> : null}
      <div className={styles[`filter${horizontal ? '-horizontal' : ''}`]}>
        <Filter
          currents={filters} selects={filtersSelects}
          onSet={onSetFilter} namespace={namespace}
        />
      </div>
    </div>
    <div className={styles.body}>
      <Body collection={collection} horizontal={horizontal} Item={Item} />
      <LoadButton page={page} busy={busy} onLoad={onLoad} />
    </div>
  </div>
);

BlotterView.propTypes = {
  onSetFilter: Filter.propTypes.onSet,
  filters: Filter.propTypes.currents,
  filtersSelects: Filter.propTypes.selects,
  namespace: Filter.propTypes.namespace,
  // ===
  Labels: React.PropTypes.func,
  // ===
  collection: Body.propTypes.collection,
  Item: Body.propTypes.Item,
  // ===
  onLoad: LoadButton.propTypes.onLoad,
  busy: LoadButton.propTypes.busy,
  page: LoadButton.propTypes.page,
  // ===
  horizontal: React.PropTypes.bool,
};

export default BlotterView;
