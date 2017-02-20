import { connect } from 'react-redux';
import { TYPES } from 'states/tokens';

import View from './View';

const mapStateToProps = (state) => ({
  removing: state.tokens.removing,
});

const mapDispatchToProps = (dispatch, props) => ({
  onRemove: () => dispatch({
    type: TYPES.REMOVE,
    payload: props.token.id,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
