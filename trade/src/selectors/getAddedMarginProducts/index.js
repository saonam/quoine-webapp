import createSelector from './createSelector';

const getTrading = state => state.trading;
const getMrgAccs = state => state.mrgAccs;

export default createSelector(
  [getTrading, getMrgAccs], (trading, mrgAccs) => (
    mrgAccs.keys.filter(name => (
      mrgAccs.models[name].account === trading.account
    )).map(name => mrgAccs.models[name].product)
  ),
);
