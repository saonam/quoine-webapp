import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/user';

import Container from './Container';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdate: (user) => dispatch({
    type: TYPES.APPLY,
    payload: user,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
