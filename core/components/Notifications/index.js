import { connect } from 'react-redux';

import Container from './Container';

const mapStateToProps = (state) => ({
  user: state.user,
  dismissed: state.notifications.dismissed,
});

export default connect(mapStateToProps)(Container);
