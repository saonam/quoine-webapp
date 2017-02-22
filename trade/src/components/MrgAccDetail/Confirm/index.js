import { connect } from 'react-redux';
import { TYPES, TASKS, CONFIRMS } from '@quoine/states/confirmations';

import getTradingMrgAcc from 'selectors/getTradingMrgAcc';

import View from './View';

const mapStateToProps = (state) => ({
  side: state.confirmations.activities[CONFIRMS.MRG_ACC_CLOSE],
  mrgAcc: getTradingMrgAcc(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: TASKS.MRG_ACC_CLOSE, ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
