import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  side: state.confirmations.activities['order-add-confirm'],
});

const mapDispatchToProps = (dispatch) => ({
  onSet: (payload) => dispatch({
    type: TYPES.SET_CONFIRMING,
    payload: { task: 'order-add', ...payload },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
