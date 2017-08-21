import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/user';

import Container from './Container';

const mapDispatchToProps = dispatch => ({
  onSuccess: () => dispatch({
    type: TYPES.APPLY,
    payload: { needConfirmNewTerm: false },
  }),
});

export default connect(null, mapDispatchToProps)(Container);
