import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/user';

import Container from './Container';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeStatus: (status) => dispatch({
    type: TYPES.APPLY,
    payload: { status },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
