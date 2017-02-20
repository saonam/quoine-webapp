import { select, take } from 'redux-saga/effects';
import { TYPES } from 'states/mrgAccs';

export default function* ensureTradingMrgAcc() {
  const trading = yield select(state => state.trading);
  const name = `${trading.account}${trading.product}`;
  let mrgAcc = yield select(state => state.mrgAccs.models[name]);
  while (!mrgAcc) {
    yield take(TYPES.APPLY);
    mrgAcc = yield select(state => state.mrgAccs.models[name]);
  }
  return mrgAcc;
}
