import { connect } from 'react-redux';
import { TYPES, CONFIRMS } from 'states/wdrBank';

import View from './View';

const mapStateToProps = (state) => ({
  removing: state.wdrBank.removing,
  confirming: state.confirmations.activities[CONFIRMS.WDR_BANK_REMOVE],
});

const mapDispatchToProps = (dispatch, props) => ({
  onRemove: () => dispatch({
    type: TYPES.REMOVE,
    payload: props.bank,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
