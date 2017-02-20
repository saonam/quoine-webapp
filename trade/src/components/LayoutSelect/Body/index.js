import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  all: state.layouts.all,
});

export default connect(mapStateToProps)(View);
