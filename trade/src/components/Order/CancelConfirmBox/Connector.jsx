import { connect } from 'react-redux';
import { TYPES, TASKS, CONFIRMS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  confirming: state.confirmations.activities[CONFIRMS.ORDER_CANCEL],
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: TASKS.ORDER_CANCEL, ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
