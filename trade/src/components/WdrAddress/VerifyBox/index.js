import { connect } from 'react-redux';
import { TYPES } from 'states/wdrAddress';

import Container from './Container';

const mapStateToProps = (state) => ({
  busy: state.wdrAddress.busy,
  submitting: state.wdrAddress.submitting,
  success: state.wdrAddress.success,
  error: state.wdrAddress.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ token }) => {
    dispatch({
      type: TYPES.VERIFY,
      payload: token,
    });
    // for FormWrapper
    return Promise.resolve();
  },
  onDismiss: () => dispatch({ type: TYPES.DISMISS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
