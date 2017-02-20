import { connect } from 'react-redux';
import { TYPES } from 'states/transBlotter';

import View from './View';

const mapStateToProps = (state) => ({
  account: state.transBlotter.account,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch({
    type: TYPES.SET_ACCOUNT, payload: event.target.value,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
