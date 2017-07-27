import { connect } from 'react-redux';
import { TYPES } from 'states/wdrAddress';

import View from './View';

const mapStateToProps = (state) => ({
  error: state.wdrBank.error,
});

const mapDispatchToProps = (dispatch) => ({
  onDismiss: () => dispatch({
    type: TYPES.APPLY,
    payload: { error: false },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
