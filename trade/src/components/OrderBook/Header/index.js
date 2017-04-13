import { connect } from 'react-redux';
import { TYPES } from 'states/orderBook';

import View from './View';

const mapStateToProps = (state) => ({
  mode: state.orderBook.mode,
});

const mapDispatchToProps = dispatch => ({
  onChangeMode: (value) => {
    dispatch({
      type: TYPES.APPLY,
      payload: { mode: value },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
