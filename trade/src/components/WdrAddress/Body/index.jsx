import { connect } from 'react-redux';
import { TYPES } from 'states/wdrAddress';

import getWdrAddress from 'selectors/getWdrAddress';

import View from './View';

const mapStateToProps = (state) => ({
  busy: state.wdrAddress.busy,
  current: state.wdrAddress.current,
  all: state.wdrAddress.all,
  address: getWdrAddress(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: () => dispatch({
    type: TYPES.APPLY, payload: { adding: true },
  }),
  onVerify: () => dispatch({
    type: TYPES.APPLY, payload: { verifying: true },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
