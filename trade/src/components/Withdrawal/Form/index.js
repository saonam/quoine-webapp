import { connect } from 'react-redux';
import { TYPES } from 'states/withdrawal';

import Container from './Container';

const mapStateToProps = (state) => ({
  bank: state.wdrBank.current,
  submitting: state.withdrawal.submitting,
  error: state.withdrawal.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (withdrawal) => dispatch({
    type: TYPES.SUBMIT, payload: withdrawal,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
