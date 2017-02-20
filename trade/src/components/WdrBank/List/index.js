import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  banks: state.wdrBank.all,
});

export default connect(mapStateToProps)(View);
