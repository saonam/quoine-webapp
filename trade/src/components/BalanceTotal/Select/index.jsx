import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  all: state.accounts.keys,
});

export default connect(mapStateToProps)(View);
