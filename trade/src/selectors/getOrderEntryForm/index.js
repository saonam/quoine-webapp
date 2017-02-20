import createSelector from './createSelector';

const getForm = state => state.orderEntry.form;
const getTrading = state => state.trading;
const getProducts = state => state.products;

export default createSelector(
  [getForm, getTrading, getProducts],
  (form, trading, products) => {
    const product = products.models[trading.product] || {};
    return ({
      ...form,
      account: trading.account,
      product: trading.product,
      market: trading.market,
      // ===
      isFutures: product.isFutures,
      productId: product.id,
      quoteCurrency: product.quoteCurrency,
      baseCurrency: product.baseCurrency,
    });
  },
);
