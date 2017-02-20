import { connect } from 'react-redux';
import { TYPES } from 'states/tokens';

import Container from './Container';

const mapDispatchToProps = dispatch => ({
  onAdd: (form) => dispatch({ type: TYPES.ADD, payload: form }),
});

export default connect(null, mapDispatchToProps)(Container);
