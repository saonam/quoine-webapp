import { connect } from 'react-redux';
import { TYPES } from 'states/wdrAddress';

import Container from './Container';

const mapStateToProps = (state) => ({
  editting: state.wdrAddress.editting,
  submitting: state.wdrAddress.submitting,
  success: state.wdrAddress.success,
  error: state.wdrAddress.error,
});

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: (form) => {
    dispatch({
      type: TYPES[props.action.toUpperCase()],
      payload: form,
    });
    // for FormWrapper
    return Promise.resolve();
  },
  onDismiss: () => dispatch({ type: TYPES.DISMISS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
