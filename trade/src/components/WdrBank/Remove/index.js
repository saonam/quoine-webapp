import { connect } from 'react-redux';
import { TYPES } from 'states/wdrBank';

import View from './View';

const mapStateToProps = (state) => ({
  removing: state.wdrBank.removing,
  confirming: state.confirmations.activities['wdr-bank-remove-confirm'],
});

const mapDispatchToProps = (dispatch, props) => ({
  onRemove: () => dispatch({
    type: TYPES.REMOVE,
    payload: props.bank,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
