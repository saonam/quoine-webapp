import { connect } from 'react-redux';
import { TYPES, TASK } from '@quoine/states/confirmations';

import View from './View';

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: TASK.TOKEN_REMOVE, ...payload },
  }),
});

export default connect(null, mapDispatchToProps)(View);
