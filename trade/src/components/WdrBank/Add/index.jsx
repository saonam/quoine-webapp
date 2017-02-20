import { connect } from 'react-redux';
import { TYPES } from 'states/wdrBank';

import Container from './Container';

const mapStateToProps = (state) => ({
  busy: !!state.wdrBank.adding,
  success: state.wdrBank.success,
  error: state.wdrBank.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (form) => {
    dispatch({ type: TYPES.ADD, payload: form });
    // for FormWrapper
    return Promise.resolve();
  },
  onDismiss: () => dispatch({
    type: TYPES.APPLY,
    payload: { inputting: false, error: false, success: false },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
