import { connect } from 'react-redux';

import Container from './Container';

const mapStateToProps = (state) => ({
  userId: state.user.id,
});

export default connect(mapStateToProps)(Container);
