import { connect } from 'react-redux';
import { TYPES, TASKS, CONFIRMS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  confirming: state.confirmations.activities[CONFIRMS.WDR_BANK_REMOVE],
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: TASKS.WDR_BANK_REMOVE, ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
