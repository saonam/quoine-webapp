import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/user';

import View from './View';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeStatus: (status) => dispatch({
    type: TYPES.APPLY,
    payload: { status },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
