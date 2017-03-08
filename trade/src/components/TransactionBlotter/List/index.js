import { connect } from 'react-redux';
import { TYPES } from 'states/transactionBlotter';

import getCollection from 'selectors/getTransactionBlotterCollection';

import View from './View';

const mapStateToProps = (state) => ({
  filters: state.transactionBlotter.filters,
  filtersSelects: state.transactionBlotter.filtersSelects,
  // ===
  collection: getCollection(state),
  // ===
  busy: state.transactionBlotter.busy,
  page: state.transactionBlotter.page,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: TYPES.LOAD }),
  onSetFilter: (filter) => dispatch({
    type: TYPES.SET_FILTER, payload: filter,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
