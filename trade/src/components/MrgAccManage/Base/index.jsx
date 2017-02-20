import { connect } from 'react-redux';
import { TYPES } from 'states/mrgAccs';
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
});

export default connect(makeMapStateToProps, mapDispatchToProps)(View);
