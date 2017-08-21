import { connect } from 'react-redux';
import { TYPES } from 'states/wdrAddress';
import { CONFIRMS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  removing: state.wdrAddress.removing,
  confirming: state.confirmations.activities[CONFIRMS.WDR_ADDRESS_REMOVE],
});

const mapDispatchToProps = (dispatch, props) => ({
  onRemove: () => dispatch({
    type: TYPES.REMOVE,
    payload: props.address,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
