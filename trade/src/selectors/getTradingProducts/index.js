import getTradingMrgAccs from 'selectors/getTradingMrgAccs';

import createSelector from './createSelector';

const getTrading = state => state.trading;
const getProducts = state => state.products;
const getMrgAccs = state => state.mrgAccs;

export default createSelector(
  [getTrading, getProducts, getMrgAccs, getTradingMrgAccs],
  (trading, products, mrgAccs, tradingMrgAccs) => {
    switch (trading.market) {
      case 'spot': {
        return products.keys.filter((symbol) => {
          const product = products.models[symbol];
          return (
            !product.isFutures &&
            product.quoteCurrency === trading.account
          );
        });
      }
      case 'margin': {
        return tradingMrgAccs.map(
          name => mrgAccs.models[name].product
        );
      }
      case 'futures': {
        return products.keys.filter(symbol => (
          products.models[symbol].isFutures
        ));
      }
      default: return [];
    }
  },
);
