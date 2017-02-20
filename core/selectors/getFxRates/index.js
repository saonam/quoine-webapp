import createSelector from './createSelector';

const getAccounts = state => state.accounts;

export default createSelector(
  [getAccounts],
  (accounts) => (
    accounts.keys.reduce((prev, key) => {
      const { currency, fxRate } = accounts.models[key];
      if (prev[currency]) { return prev; }
      return {
        ...prev,
        [currency]: fxRate,
      };
    }, {})
  ),
);
