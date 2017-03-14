import { connect } from 'react-redux';

import View from './View';

const makeMapStateToProps = (state) => ({
  user: state.user,
});

export default connect(makeMapStateToProps)(View);
