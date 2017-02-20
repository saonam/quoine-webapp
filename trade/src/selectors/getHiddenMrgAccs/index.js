import createSelector from './createSelector';

const getTrading = state => state.trading;
const getMrgAccs = state => state.mrgAccs;

export default createSelector(
  [getTrading, getMrgAccs], (trading, mrgAccs) => (
    mrgAccs.hiddens.filter((name) => {
      // this is interesting: the "name" in "hiddens" might not be loaded
      // in "models". Therefore, model should have fallback
      const model = mrgAccs.models[name] || {};
      return model.account === trading.account;
    })
  ),
);
