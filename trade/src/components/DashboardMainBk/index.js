import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  layout: state.layouts.current,
});

export default connect(mapStateToProps)(View);
