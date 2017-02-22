import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/confirmations';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch({
    type: TYPES.REMOVE_SKIP,
    payload: props.task,
  }),
});

export default connect(null, mapDispatchToProps)(View);
