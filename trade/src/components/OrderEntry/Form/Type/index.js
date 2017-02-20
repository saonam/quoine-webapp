import { connect } from 'react-redux';
import { TYPES } from 'states/orderEntry';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch({
    type: TYPES.SET_FORM,
    payload: { propName: 'type', value: props.value },
  }),
});

export default connect(null, mapDispatchToProps)(View);
