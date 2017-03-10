import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  adding: state.wdrBank.adding,
  editting: state.wdrBank.editting,
});

export default connect(mapStateToProps)(View);
