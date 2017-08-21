import { connect } from 'react-redux';
import { TYPES } from 'states/session';

import Container from './Container';

const mapDispatchToProps = dispatch => ({
  setToken: ({ token, tokenId }) => dispatch({
    type: TYPES.SET_TOKEN,
    payload: { tokenId, token },
  }),
});

export default connect(null, mapDispatchToProps)(Container);
