import { connect } from 'react-redux';
import { TYPES } from 'states/wdrBank';

import View from './View';

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch({
    type: TYPES.APPLY, payload: { current: event.target.value },
  }),
});

export default connect(null, mapDispatchToProps)(View);
