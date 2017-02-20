import { connect } from 'react-redux';
import { TYPES } from 'states/panels';

import View from './View';

const mapDispatchToProps = (dispatch, { panel, side }) => ({
  onMove: () => dispatch({
    type: TYPES.MOVE, payload: { index: panel.index, side },
  }),
});

export default connect(null, mapDispatchToProps)(View);
