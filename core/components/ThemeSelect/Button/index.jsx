import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/themes';

import View from './View';

const mapStateToProps = state => ({
  current: state.themes.current,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch({
    type: TYPES.SET_CURRENT, payload: props.theme,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
