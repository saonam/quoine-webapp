import { connect } from 'react-redux';
import { TYPES } from 'states/orderBlotter';

import getCollection from 'selectors/getOrderBlotterCollection';

import View from './View';

const mapStateToProps = (state) => ({
  filters: state.orderBlotter.filters,
  filtersSelects: state.orderBlotter.filtersSelects,
  // ===
  collection: getCollection(state),
  // ===
  busy: state.orderBlotter.busy,
  page: state.orderBlotter.page,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: TYPES.LOAD }),
  onSetFilter: (filter) => dispatch({
    type: TYPES.SET_FILTER, payload: filter,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
