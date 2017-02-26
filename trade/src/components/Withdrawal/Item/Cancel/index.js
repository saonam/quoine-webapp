import { connect } from 'react-redux';
import { TYPES } from 'states/withdrawal';
import { CONFIRMS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  submitting: state.withdrawal.submitting,
  confirming: state.confirmations.activities[CONFIRMS.WITHDRAWAL_CANCEL],
});

const mapDispatchToProps = (dispatch, props) => ({
  onCancel: () => dispatch({
    type: TYPES.CANCEL, payload: props.withdrawal,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
