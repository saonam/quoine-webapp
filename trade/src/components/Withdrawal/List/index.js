import { connect } from 'react-redux';
import { TYPES } from 'states/withdrawal';

import Container from './Container';

const mapStateToProps = (state) => ({
  busy: state.withdrawal.busy,
  withdrawals: state.withdrawal.all,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: ({ currency, type }) => dispatch({
    type: TYPES.LOAD, payload: { currency, type },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
