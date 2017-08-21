import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  wdrBank: state.wdrBank,
  wdrAddress: state.wdrAddress,
});

export default connect(mapStateToProps)(View);
