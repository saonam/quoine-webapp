import { connect } from 'react-redux';
import { TYPES } from 'states/withdrawal';

import View from './View';

const mapStateToProps = (state) => ({
  error: state.withdrawal.error,
});

const mapDispatchToProps = (dispatch) => ({
  onDismiss: () => dispatch({
    type: TYPES.APPLY,
    payload: { error: false, submitting: false },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
