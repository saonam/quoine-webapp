import getFiatCurrencies from 'selectors/getFiatCurrencies';
import createSelector from './createSelector';

const getProducts = state => state.products;

const getUSDFxRates = ({ products, fiatCurrencies }) => {
  const result = {};

  fiatCurrencies.forEach(currency => {
    const productKey = products.keys.find(key =>
      products.models[key].currency === currency
    );
    const product = products.models[productKey];
    if (product && product.fxRate) {
      result[currency] = 1 / product.fxRate;
    }
  });

  return result;
};

const getCurrencyFxRates = ({ currency, fiatCurrencies, USDFxRates }) => {
  const result = {};

  fiatCurrencies.forEach(i => {
    const left = USDFxRates[currency];
    const right = USDFxRates[i];

    result[i] = right / left;
  });

  return result;
};

// fiatFxRates with USD
export default createSelector(
  [getFiatCurrencies, getProducts],
  (fiatCurrencies, products) => {
    const USDFxRates = getUSDFxRates({ products, fiatCurrencies });

    const fiatFxRates = {
      USD: USDFxRates,
    };

    fiatCurrencies
      .filter(currency => currency !== 'USD')
      .forEach(currency => {
        fiatFxRates[currency] = getCurrencyFxRates({ currency, fiatCurrencies, USDFxRates });
      });

    return fiatFxRates;
  },
);
