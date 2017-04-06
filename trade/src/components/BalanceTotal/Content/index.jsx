import { connect } from 'react-redux';

import getFxRates from 'selectors/getFxRates';

import View from './View';

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  fxRates: getFxRates(state),
});

export default connect(mapStateToProps)(View);
