import { createSelector } from 'reselect';
import throttle from 'lodash.throttle';

import getFiatFxRates from 'selectors/getFiatFxRates';

const getCurrencies = state => state.currencies.keys;
const getProducts = state => state.products;

// fxRates = {
//   "USD":{
//     "USD":1,
//     "EUR":0.9411499996926205,
//     "SGD":1.426796,
//     "HKD":7.7565100000000005,
//     "AUD":1.3617750000000002,
//     "CNY":6.894821,
//     "INR":68.158781,
//     "JPY":110.95939999999999,
//     "PHP":49.82388,
//     "IDR":13387.99999999994,
//     "BTC":0.0009600384015360614,
//     "ETH":0.00214222212701235,
//     "XBT":0
//   },
//   "JPY":{
//     "USD":0.009012305401795612,
//     "EUR":0.008481931226129743,
//     "SGD":0.012858721298060373,
//     "HKD":0.0699040369720817,
//     "AUD":0.012272732188530222,
//     "CNY":0.062138232542713834,
//     "INR":0.6142677501861042,
//     "JPY":1,
//     "PHP":0.44902802286241644,
//     "IDR":120.65674471923913,
//     "BTC":0.00000865215927246897,
//     "ETH":0.00002129585263269978,
//     "XBT":0
//   },
//   "BTC":{
//     "USD":1041.625,
//     "EUR":220.17364815500002,
//     "SGD":1486.18638,
//     "HKD":808.462125,
//     "AUD":50,
//     "CNY":214.725,
//     "INR":24500,
//     "JPY":115578.08502,
//     "PHP":11510.49086,
//     "IDR":703,
//     "BTC":1,
//     "ETH":3.5149384885764503,
//     "XBT":0
//   },
// }

const getFxRateInProduct = ({ frm, to, products }) => {
  if (frm === to) { return 1; }

  let isReverse = false;
  let productKey = products.keys.find(key => (
    products.models[key].baseCurrency === frm &&
    products.models[key].quoteCurrency === to
  ));
  if (!productKey) {
    isReverse = true;
    productKey = products.keys.find(key => (
      products.models[key].quoteCurrency === frm &&
      products.models[key].baseCurrency === to
    ));
  }

  const product = products.models[productKey];

  if (product) {
    const rate = (product.bid + product.ask) / 2;
    return isReverse && rate ? (1 / rate) : rate;
  }

  return 0;
};

const getCurrencyFxRates = ({ currency, currencies, products, fiatFxRates }) => {
  const result = {};
  currencies.forEach(i => {
    if (fiatFxRates[i]) {
      result[i] = fiatFxRates[i];
    } else {
      result[i] = getFxRateInProduct({ frm: currency, to: i, products });
    }
  });
  return result;
};

const selector = createSelector(
  [getFiatFxRates, getCurrencies, getProducts],
  (fiatFxRates, currencies, products) => {
    const fxRates = {};
    currencies.forEach(currency => {
      fxRates[currency] = getCurrencyFxRates({
        currency,
        currencies,
        products,
        fiatFxRates: fiatFxRates[currency] || {},
      });
    });
    return fxRates;
  },
);

export default throttle(selector, 5000);
