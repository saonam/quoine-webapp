import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/confirmations';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onToggle: () => dispatch({
    type: TYPES.TOGGLE,
    payload: { task: props.task, side: props.side },
  }),
});

export default connect(null, mapDispatchToProps)(View);
