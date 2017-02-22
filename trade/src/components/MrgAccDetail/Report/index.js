import { connect } from 'react-redux';
import { TYPES, TASKS, REPORTS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  result: state.confirmations.activities[REPORTS.MRG_ACC_CLOSE],
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_REPORTING,
    payload: { task: TASKS.MRG_ACC_CLOSE, ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
