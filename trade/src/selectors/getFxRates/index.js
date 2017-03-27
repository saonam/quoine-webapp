import createSelector from './createSelector';

const getProducts = state => state.products;

// fxRates with USD
export default createSelector(
  [getProducts],
  (products) => {
    const { keys, models } = products;

    const fxRates = {};
    keys.forEach(key => {
      const { currency, fxRate } = models[key];
      if (!fxRates[currency]) {
        fxRates[currency] = fxRate;
      }
    });

    return fxRates;
  },
);
