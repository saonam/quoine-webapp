import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/languages';

import View from './View';

const mapStateToProps = state => ({
  current: state.languages.current,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch({
    type: TYPES.SET_CURRENT, payload: props.language,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
