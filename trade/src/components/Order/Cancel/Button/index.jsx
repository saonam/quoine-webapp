import { connect } from 'react-redux';
import { TYPES } from 'states/orderItem';

import View from './View';

const mapStateToProps = state => ({
  cancel: state.orderItem.cancel,
});

const mapDispatchToProps = (dispatch, props) => ({
  onCancel: () => {
    dispatch({
      type: TYPES.UPDATE,
      payload: {
        id: props.order.id,
        target: 'cancel',
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(View);

