import { connect } from 'react-redux';
import { TYPES } from 'states/positionItem';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onEdit: (value) => dispatch({
    type: TYPES.UPDATE,
    payload: {
      id: props.position.id,
      target: props.target,
      value,
    },
  }),
});

export default connect(null, mapDispatchToProps)(View);
