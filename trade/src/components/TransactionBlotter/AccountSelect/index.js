import { connect } from 'react-redux';
import { TYPES } from 'states/transactionBlotter';

import View from './View';

const mapStateToProps = (state) => ({
  account: state.transactionBlotter.account,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => dispatch({
    type: TYPES.SET_ACCOUNT, payload: value,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
