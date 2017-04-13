import { connect } from 'react-redux';
import { TYPES } from 'states/orderEntry';

import View from './View';

const mapStateToProps = (state) => ({
  mode: state.orderBook.mode,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch({
    type: TYPES.SET_FORM,
    payload: { propName: 'price', value: props.model.price },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
