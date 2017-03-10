import { connect } from 'react-redux';
import { TYPES } from 'states/wdrBank';

import Wrapper from './Wrapper';

const mapStateToProps = (state) => ({
  busy: state.wdrBank.busy,
  current: state.wdrBank.current,
  all: state.wdrBank.all,
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: () => dispatch({
    type: TYPES.APPLY, payload: { adding: true },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
