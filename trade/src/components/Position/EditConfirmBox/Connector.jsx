import { connect } from 'react-redux';
import { TYPES, TASKS, CONFIRMS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  confirming: state.confirmations.activities[CONFIRMS.POSITION_EDIT],
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: TASKS.POSITION_EDIT, ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
