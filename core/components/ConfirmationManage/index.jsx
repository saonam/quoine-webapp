import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  skips: state.confirmations.skips,
});

export default connect(mapStateToProps)(View);
