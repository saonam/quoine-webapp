import { connect } from 'react-redux';
import { TYPES } from 'states/ips';

import Container from './Container';

const mapDispatchToProps = dispatch => ({
  onAdd: (ip) => dispatch({ type: TYPES.ADD, payload: ip }),
});

export default connect(null, mapDispatchToProps)(Container);
