import { connect } from 'react-redux';
import { TYPES } from 'states/orderEntry';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch({
    type: TYPES.SET_FORM,
    payload: { propName: 'price', value: props.execution.price },
  }),
});

const withOnClick = connect(null, mapDispatchToProps)(View);

const mapStateToProps = (state, props) => ({
  execution: state.tradeFeed.models[props.id],
});

export default connect(mapStateToProps)(withOnClick);
