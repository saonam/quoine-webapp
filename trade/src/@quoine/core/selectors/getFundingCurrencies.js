import { createSelector } from 'reselect';

const getKeys = state => state.currencies.keys;
const getModels = state => state.currencies.models;

export default createSelector(
  [getKeys, getModels], (keys, models) => (
    keys.filter(key =>
      models[key].isFunding
    )
  ),
);
