import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state, props) => ({
  token: state.tokens.models[props.id],
});

export default connect(mapStateToProps)(View);
