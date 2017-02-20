import { connect } from 'react-redux';
import { TYPES } from 'states/positionItem';

import View from './View';

const mapDispatchToProps = (dispatch) => ({
  onDismiss: () => dispatch({
    type: TYPES.APPLY,
    payload: { error: false },
  }),
});

export default connect(null, mapDispatchToProps)(View);
