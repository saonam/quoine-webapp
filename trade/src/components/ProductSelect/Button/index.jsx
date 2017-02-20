import { connect } from 'react-redux';
import { TYPES } from 'states/trading';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onSet: () => dispatch({
    type: TYPES.SET_PRODUCT, payload: props.symbol,
  }),
});

export default connect(null, mapDispatchToProps)(View);
