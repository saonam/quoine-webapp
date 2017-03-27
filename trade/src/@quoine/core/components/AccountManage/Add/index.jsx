import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/accounts';

import View from './View';

const mapStateToProps = (state) => ({
  adding: state.accounts.adding,
});

const mapDispatchToProps = (dispatch, props) => ({
  onAdd: () => dispatch({
    type: TYPES.ADD, payload: props.modelKey,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
