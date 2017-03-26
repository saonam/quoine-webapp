import { connect } from 'react-redux';
import { TYPES } from 'states/wdrBank';

import View from './View';

const mapDispatchToProps = (dispatch) => ({
  onChange: (current) => dispatch({
    type: TYPES.APPLY, payload: { current },
  }),
});

export default connect(null, mapDispatchToProps)(View);
