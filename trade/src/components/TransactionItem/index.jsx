import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state, props) => ({
  trans: state.transactionBlotter.models[props.id],
});

export default connect(mapStateToProps)(View);
