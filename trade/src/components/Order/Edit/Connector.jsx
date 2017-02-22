import { connect } from 'react-redux';
import { CONFIRMS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  activity: state.confirmations.activities[CONFIRMS.ORDER_EDIT],
  error: state.orderItem.error,
});

export default connect(mapStateToProps)(View);
