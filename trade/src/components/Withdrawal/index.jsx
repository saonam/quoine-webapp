import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  inputting: state.wdrBank.inputting,
});

export default connect(mapStateToProps)(View);
