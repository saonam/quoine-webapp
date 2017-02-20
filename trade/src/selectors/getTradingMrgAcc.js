import { createSelector } from 'reselect';

import prepareMrgAcc from 'selectors/utils/prepareMrgAcc';

const getTrading = (state) => (state.trading);
const getMrgAccs = (state) => (state.mrgAccs);

export default createSelector(
  [getTrading, getMrgAccs],
  (trading, mrgAccs) => prepareMrgAcc(
    mrgAccs.models[`${trading.account}${trading.product}`],
  )
);
