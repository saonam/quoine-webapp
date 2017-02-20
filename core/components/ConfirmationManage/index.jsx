import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  prefs: state.confirmations.prefs,
});

export default connect(mapStateToProps)(View);
