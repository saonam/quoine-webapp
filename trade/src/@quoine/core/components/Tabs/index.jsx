import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/tabs';

import View from './View';

const mapStateToProps = (state, props) => ({
  currentId: state.tabs[props.name],
});

const mapDispatchToProps = (dispatch, props) => ({
  onSelect: (panel) => dispatch({
    type: TYPES.SET_PANEL, payload: { [props.name]: panel },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
