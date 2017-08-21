import { connect } from 'react-redux';
import { TYPES } from 'states/wdrAddress';

import Wrapper from './Wrapper';

const mapDispatchToProps = (dispatch) => ({
  onAccountChange: (account) => dispatch({
    type: TYPES.ACCOUNT_CHANGE, payload: account,
  }),
});

export default connect(null, mapDispatchToProps)(Wrapper);
