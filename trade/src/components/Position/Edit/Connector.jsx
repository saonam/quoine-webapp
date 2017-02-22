import { connect } from 'react-redux';
import { CONFIRMS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  activity: state.confirmations.activities[CONFIRMS.POSITION_EDIT],
  error: state.positionItem.error,
});

export default connect(mapStateToProps)(View);
