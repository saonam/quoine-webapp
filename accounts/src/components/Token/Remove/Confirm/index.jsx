import { connect } from 'react-redux';
import { TYPES, TASKS } from '@quoine/states/confirmations';

import View from './View';

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: TASKS.TOKEN_REMOVE, ...payload },
  }),
});

export default connect(null, mapDispatchToProps)(View);
