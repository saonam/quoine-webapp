import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  ids: state.tokens.keys,
  busy: state.tokens.busy,
});

export default connect(mapStateToProps)(View);
