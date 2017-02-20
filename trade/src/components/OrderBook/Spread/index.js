import { connect } from 'react-redux';

import getSpread from 'selectors/getOrderBookSpread';
import getCurrencies from 'selectors/getTradingBaseQuoteCurrencies';

import View from './View';

const mapStateToProps = (state) => ({
  spread: getSpread(state),
  currencies: getCurrencies(state),
  busy: state.orderBook.busy,
});

export default connect(mapStateToProps)(View);
