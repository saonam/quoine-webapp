import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  busy: state.tokens.adding,
});

export default connect(mapStateToProps)(View);
