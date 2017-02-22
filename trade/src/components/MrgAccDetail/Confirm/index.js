import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/confirmations';

import getTradingMrgAcc from 'selectors/getTradingMrgAcc';

import View from './View';

const mapStateToProps = (state) => ({
  side: state.confirmations.activities['mrg-acc-close-confirm'],
  mrgAcc: getTradingMrgAcc(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: 'mrg-acc-close', ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
