import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  keys: state.tradeFeed.keys,
  busy: state.tradeFeed.busy,
});

export default connect(mapStateToProps)(View);
