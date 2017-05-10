import { connect } from 'react-redux';
import { TYPES } from 'states/withdrawal';

import Container from './Container';

const mapStateToProps = (state) => ({
  bank: state.wdrBank.current,
  submitting: state.withdrawal.submitting,
  error: state.withdrawal.error,
  success: state.withdrawal.success,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (withdrawal) => dispatch({
    type: TYPES.SUBMIT, payload: withdrawal,
  }),
  onDismissSuccess: () => dispatch({
    type: TYPES.APPLY, payload: { success: false },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
