import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state, props) => ({
  ip: state.ips.models[props.id],
});

export default connect(mapStateToProps)(View);
