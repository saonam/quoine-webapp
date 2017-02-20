import { connect } from 'react-redux';
import { TYPES } from 'states/mrgAccs';

import View from './View';

const mapStateToProps = (state) => ({
  adding: state.mrgAccs.adding,
});

const mapDispatchToProps = (dispatch, props) => ({
  onAdd: () => dispatch({
    type: TYPES.ADD, payload: props.modelKey,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
