import { connect } from 'react-redux';
import { TYPES } from 'states/positionBlotter';

import getCollection from 'selectors/getPositionBlotterCollection';

import View from './View';

const mapStateToProps = (state) => ({
  filters: state.positionBlotter.filters,
  filtersSelects: state.positionBlotter.filtersSelects,
  // ===
  collection: getCollection(state),
  // ===
  busy: state.positionBlotter.busy,
  page: state.positionBlotter.page,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch({ type: TYPES.LOAD }),
  onSetFilter: (filter) => dispatch({
    type: TYPES.SET_FILTER, payload: filter,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
