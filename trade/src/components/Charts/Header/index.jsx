import { connect } from 'react-redux';
import { TYPES } from 'states/charts';

import View from './View';

const mapDispatchToProps = (dispatch) => ({
  onToggle: () => dispatch({ type: TYPES.TOGGLE_DOUBLE }),
});

export default connect(null, mapDispatchToProps)(View);
