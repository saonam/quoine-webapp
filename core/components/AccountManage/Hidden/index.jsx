import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/accounts';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onShow: () => dispatch({
    type: TYPES.TOGGLE_HIDDEN, payload: props.modelKey,
  }),
});

export default connect(null, mapDispatchToProps)(View);
