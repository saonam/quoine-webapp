import { connect } from 'react-redux';
import { TYPES } from 'states/transBlotter';

import getCollection from 'selectors/getTransBlotterCollection';

import View from './View';

const mapStateToProps = (state) => ({
  filters: state.transBlotter.filters,
  filtersSelects: state.transBlotter.filtersSelects,
  // ===
  collection: getCollection(state),
  // ===
  busy: state.transBlotter.busy,
  page: state.transBlotter.page,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: TYPES.LOAD }),
  onSetFilter: (filter) => dispatch({
    type: TYPES.SET_FILTER, payload: filter,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
