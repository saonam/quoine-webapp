import { connect } from 'react-redux';
import { TYPES } from 'states/layouts';

import View from './View';

const mapStateToProps = state => ({
  current: state.layouts.current,
});

const mapDispatchToProps = (dispatch, props) => ({
  onSet: () => dispatch({
    type: TYPES.SET_CURRENT, payload: props.name,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
