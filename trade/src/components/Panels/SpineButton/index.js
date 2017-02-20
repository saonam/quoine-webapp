import { connect } from 'react-redux';
import { TYPES } from 'states/panels';

import View from './View';

const mapDispatchToProps = (dispatch, { panel }) => ({
  onExpand: () => dispatch({
    type: TYPES.RESIZE, payload: { index: panel.index, side: 'expand' },
  }),
});

export default connect(null, mapDispatchToProps)(View);
