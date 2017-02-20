import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  result: state.confirmations.activities['mrg-acc-close'].reporting,
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_REPORTING,
    payload: { task: 'mrg-acc-close', ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
