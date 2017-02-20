import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TYPES } from 'states/session';

import Container from './Step2Container';

const mapDispatchToProps = dispatch => ({
  setToken: ({ token, tokenId, continueURL }) => dispatch({
    type: TYPES.SET_TOKEN,
    payload: { tokenId, token, continueURL },
  }),
});

export default connect(null, mapDispatchToProps)(
  withRouter(Container),
);
