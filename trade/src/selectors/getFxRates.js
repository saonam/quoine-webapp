import { createSelector } from 'reselect';

const getAccounts = state => state.accounts;

// fxRates by USD
export default createSelector(
  [getAccounts],
  (accounts) => {
    const { keys, models } = accounts;
    const fxRates = {
      USD: 1,
    };

    keys.forEach(key => {
      const account = models[key];
      if (account.fxRate) {
        fxRates[key] = account.fxRate;
      }
    });

    return fxRates;
  },
);
