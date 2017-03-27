import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  user: state.user,
  state: state.notifications,
});

export default connect(mapStateToProps)(View);
