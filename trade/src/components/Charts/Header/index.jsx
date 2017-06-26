import { connect } from 'react-redux';
import { TYPES } from 'states/charts';

import View from './View';

const mapDispatchToProps = (dispatch) => ({
  onToggleDouble: () => dispatch({ type: TYPES.TOGGLE_DOUBLE }),
  onSelectProvider: (provider) => dispatch({ type: TYPES.APPLY, payload: { provider } }),
});

export default connect(null, mapDispatchToProps)(View);
