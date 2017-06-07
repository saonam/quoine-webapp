import { connect } from 'react-redux';
import { TYPES } from 'states/charts';

import View from './View';

const mapDispatchToProps = (dispatch) => ({
  onToggleDouble: () => dispatch({ type: TYPES.TOGGLE_DOUBLE }),
  onSelectMode: (value) => dispatch({ type: TYPES.APPLY, payload: { mode: value } }),
});

export default connect(null, mapDispatchToProps)(View);
