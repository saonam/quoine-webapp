import createSelector from './createSelector';

const getCurrent = state => state.trading.product;
const getAll = state => state.products;

export default createSelector(
  [getCurrent, getAll],
  (current, all) => all.models[current],
);
