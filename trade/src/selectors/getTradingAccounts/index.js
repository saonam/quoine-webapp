import createSelector from './createSelector';

const getTrading = state => state.trading;
const getAccounts = state => state.accounts;
const getCurrencies = state => state.currencies;

export default createSelector(
  [getTrading, getAccounts, getCurrencies],
  (trading, accounts, currencies) => {
    // check is ready to filter yet
    if (
      !trading.account ||
      accounts.keys.length === 0 ||
      currencies.keys.length === 0
    ) {
      return [];
    }
    switch (trading.market) {
      case 'spot':
      case 'margin': {
        // - should be filtered via hiddens
        // - care about "funding" concept
        return accounts.keys.filter(currency => (
          currencies.models[currency].isFunding &&
          accounts.hiddens.indexOf(currency) === -1
        ));
      }
      case 'futures': {
        // - cannot be hidden => don't need to use accounts.hiddens anyway
        // - don't care about "funding" concept here
        return accounts.keys.filter(currency => (
          accounts.models[currency].isFutures
        ));
      }
      default: return [];
    }
  },
);
