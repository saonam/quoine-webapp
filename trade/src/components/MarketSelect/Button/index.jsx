import { connect } from 'react-redux';
import { TYPES } from 'states/trading';

import View from './View';

const mapStateToProps = state => ({
  current: state.trading.market,
});

const mapDispatchToProps = (dispatch, props) => ({
  onSet: () => dispatch({
    type: TYPES.SET_MARKET, payload: props.market,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
