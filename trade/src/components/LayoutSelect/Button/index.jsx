import { connect } from 'react-redux';
import { TYPES } from 'states/panels';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onSet: () => dispatch({
    type: TYPES.SET_LAYOUT, payload: props.name,
  }),
});

export default connect(null, mapDispatchToProps)(View);
