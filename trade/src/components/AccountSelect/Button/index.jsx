import { connect } from 'react-redux';
import { TYPES } from 'states/trading';

import View from './View';

const mapStateToProps = state => ({
  current: state.trading.account,
});

const mapDispatchToProps = (dispatch, props) => ({
  onSet: () => dispatch({
    type: TYPES.SET_ACCOUNT, payload: props.currency,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
