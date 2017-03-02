import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/notifications';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onDismiss: () => dispatch({
    type: TYPES.DISMISS,
    payload: props.notification.id,
  }),
});

export default connect(null, mapDispatchToProps)(View);
