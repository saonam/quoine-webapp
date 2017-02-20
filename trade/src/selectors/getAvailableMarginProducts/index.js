import createSelector from './createSelector';

const getTrading = state => state.trading;
const getProducts = state => state.products;
const getCurrencies = state => state.currencies;

// fiat: get all product which has quote type is fiat
const filterForFiat = (symbols, { products, currencies }) => (
  symbols.filter(symbol => {
    const { quoteCurrency } = products.models[symbol];
    return currencies.models[quoteCurrency].type === 'fiat';
  })
);

// qrypto: get all product which has quote or base is the same with
// account
const filterForCrypto = (symbols, { products, account }) => (
  symbols.filter(symbol => {
    const { quoteCurrency, baseCurrency } = products.models[symbol];
    return (quoteCurrency === account) || (baseCurrency === account);
  })
);

export default createSelector(
  [getTrading, getProducts, getCurrencies],
  (trading, products, currencies) => {
    const { account } = trading;
    const cashes = products.keys.filter(symbol => (
      !products.models[symbol].isFutures
    ));
    const all = currencies.models[account].type === 'fiat' ? (
      filterForFiat(cashes, { products, currencies })
    ) : (
      filterForCrypto(cashes, { products, account })
    );
    return all;
  },
);
