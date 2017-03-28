import { createSelector } from 'reselect';

const getCurrencies = state => state.currencies;

export default createSelector(
  [getCurrencies],
  (currencies) => (
    currencies.keys.filter(key =>
      currencies.models[key].type === 'fiat'
    )
  ),
);
