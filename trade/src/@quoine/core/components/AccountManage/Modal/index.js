import { connect } from 'react-redux';

import getFundingCurrencies from '@quoine/selectors/getFundingCurrencies';

import View from './View';

// actually, this is a little too simple
// see MrgAccManage/Modal/index.js for a strict approach
const mapStateToProps = state => ({
  hiddens: state.accounts.hiddens,
  addeds: state.accounts.keys,
  all: getFundingCurrencies(state),
});

export default connect(mapStateToProps)(View);
