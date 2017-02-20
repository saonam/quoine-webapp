import { connect } from 'react-redux';
import { TYPES } from 'states/futures';

import View from './View';

const mapStateToProps = state => ({
  activating: state.futures.activating,
});

const mapDispatchToProps = (dispatch) => ({
  onActivate: () => dispatch({ type: TYPES.ACTIVATE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
