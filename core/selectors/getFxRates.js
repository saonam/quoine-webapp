import { createSelector } from 'reselect';

const getProducts = state => state.products;

export default createSelector(
  [getProducts],
  (products) => {
    const { keys, models } = products;
    const fxRates = {};

    keys.forEach(key => {
      const { baseCurrency, quoteCurrency, bid } = models[key];
      if (baseCurrency === 'BTC') {
        fxRates[quoteCurrency] = bid ? (1 / bid) : 0;
      }
    });

    return fxRates;
  },
);
