import { connect } from 'react-redux';

import getCurrencies from 'selectors/getTradingBaseQuoteCurrencies';

import View from './View';

const mapStateToProps = (state) => ({
  currencies: getCurrencies(state),
});

export default connect(mapStateToProps)(View);
