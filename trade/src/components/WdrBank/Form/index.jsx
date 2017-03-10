import { connect } from 'react-redux';
import { TYPES } from 'states/wdrBank';

import Container from './Container';

const mapStateToProps = (state) => ({
  editting: state.wdrBank.editting,
  submitting: state.wdrBank.submitting,
  success: state.wdrBank.success,
  error: state.wdrBank.error,
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
  onDismiss: () => dispatch({
    type: TYPES.APPLY,
    payload: {
      adding: false, editting: false, error: false, success: false,
    },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
