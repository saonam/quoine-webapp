import { connect } from 'react-redux';
import { TYPES } from 'states/ips';

import View from './View';

const mapStateToProps = (state) => ({
  error: state.ips.error,
});

const mapDispatchToProps = (dispatch) => ({
  onDismiss: () => dispatch({
    type: TYPES.APPLY,
    payload: { error: false, removing: false },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
