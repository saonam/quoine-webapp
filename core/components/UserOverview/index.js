import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(View);
