import { connect } from 'react-redux';

import getCurrencies from 'selectors/getTradingBaseQuoteCurrencies';
import makeGetBook from 'selectors/makeGetOrderBookWithSelf';

import View from './View';

const makeMapStateToProps = () => {
  const getBook = makeGetBook();
  return (state, props) => ({
    models: getBook(state, props),
    currencies: getCurrencies(state),
  });
};

export default connect(makeMapStateToProps)(View);
