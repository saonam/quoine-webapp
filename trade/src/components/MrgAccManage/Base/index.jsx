import { connect } from 'react-redux';
import { TYPES } from 'states/mrgAccs';
import { TYPES as TRADING_TYPES } from 'states/trading';
import makeGetMrgAcc from 'selectors/makeGetMrgAcc';

import View from './View';

const makeMapStateToProps = () => {
  const getMrgAcc = makeGetMrgAcc();
  return (state, props) => ({
    mrgAcc: getMrgAcc(state, props),
  });
};

const mapDispatchToProps = (dispatch, props) => ({
  onToggle: () => dispatch({
    type: TYPES.TOGGLE_HIDDEN, payload: props.name,
  }),
  onClick: () => dispatch({
    type: TRADING_TYPES.SET_PRODUCT, payload: props.name.substring(3, props.name.length),
  }),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(View);
