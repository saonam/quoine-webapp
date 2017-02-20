import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/confirmations';

import View from './View';

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: 'position-claim', ...payload },
  }),
});

export default connect(null, mapDispatchToProps)(View);
