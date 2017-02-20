import { connect } from 'react-redux';
import { TYPES } from '@quoine/states/accounts';

import View from './View';

// ok.. wait, we need to explain here:
// Not all account can be hidden. An account can be hidden if:
// - it is a funding account (hide a non-funding account result in no effect)
// - it is not the last visible funding account (ie: there must be account
//   left to trade, obvious right?)
// - it is not a futures account
// So, theoritically, we need to check all the above conditions.
// However, in practical, there is one simple condition that can satisfy them:
// - it is a fiat account
// Therefore, here, we only connect to the account type
const mapStateToProps = (state, props) => ({
  type: state.accounts.models[props.modelKey].type,
});

const mapDispatchToProps = (dispatch, props) => ({
  onHide: () => dispatch({
    type: TYPES.TOGGLE_HIDDEN, payload: props.modelKey,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
