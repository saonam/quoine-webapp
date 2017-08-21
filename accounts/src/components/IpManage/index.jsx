import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  ids: state.ips.keys,
  busy: state.ips.busy,
});

export default connect(mapStateToProps)(View);
