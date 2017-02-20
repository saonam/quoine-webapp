import { connect } from 'react-redux';
import { TYPES } from 'states/executionBlotter';

import getCollection from 'selectors/getExecutionBlotterCollection';

import View from './View';

const mapStateToProps = (state) => ({
  filters: state.executionBlotter.filters,
  filtersSelects: state.executionBlotter.filtersSelects,
  // ===
  collection: getCollection(state),
  // ===
  busy: state.executionBlotter.busy,
  page: state.executionBlotter.page,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: TYPES.LOAD }),
  onSetFilter: (filter) => dispatch({
    type: TYPES.SET_FILTER, payload: filter,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
