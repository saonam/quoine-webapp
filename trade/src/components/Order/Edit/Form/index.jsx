import { connect } from 'react-redux';
import { TYPES } from 'states/orderItem';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onEdit: (value) => dispatch({
    type: TYPES.UPDATE,
    payload: {
      id: props.order.id,
      target: props.target,
      value,
    },
  }),
});

export default connect(null, mapDispatchToProps)(View);
