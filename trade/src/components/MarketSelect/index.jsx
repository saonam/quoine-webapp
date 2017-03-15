import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  futures: state.futures.ok,
  user: state.user,
});

export default connect(mapStateToProps)(View);
