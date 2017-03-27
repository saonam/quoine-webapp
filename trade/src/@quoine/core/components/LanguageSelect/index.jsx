import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  all: state.languages.all,
});

export default connect(mapStateToProps)(View);
