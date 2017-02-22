import { connect } from 'react-redux';
import { TYPES, TASKS, REPORTS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  order: state.confirmations.activities[REPORTS.ORDER_ADD],
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_REPORTING,
    payload: { task: TASKS.ORDER_ADD, ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
