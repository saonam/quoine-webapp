import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  confirming: state.confirmations.activities['order-cancel'].confirming,
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: 'order-cancel', ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
