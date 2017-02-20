import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  futures: state.futures.ok,
});

export default connect(mapStateToProps)(View);
