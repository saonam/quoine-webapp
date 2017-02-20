import createSelector from './createSelector';

const getTradingProduct = state => state.trading.product;
const getProducts = state => state.products;

export default createSelector(
  [getTradingProduct, getProducts],
  (tradingProduct, products) => {
    const model = products.models[tradingProduct];
    if (!model) { return undefined; }
    const { baseCurrency: base, quoteCurrency: quote } = model;
    return { base, quote };
  },
);
