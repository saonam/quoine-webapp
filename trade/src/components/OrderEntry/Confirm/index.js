import { connect } from 'react-redux';
import { TYPES, TASKS, CONFIRMS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  side: state.confirmations.activities[CONFIRMS.ORDER_ADD],
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: TASKS.ORDER_ADD, ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
