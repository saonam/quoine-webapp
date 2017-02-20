import { call, select, take } from 'redux-saga/effects';
import { TYPES as TRADING_TYPES } from 'states/trading';

import * as resources from '../resources';
import applyKeysModels from './applyKeysModels';

function* initMrgAccs() {
  const trading = yield select(state => state.trading);
  // if not margin trading => skip
  if (trading.market !== 'margin') { return; }
  // if margin trading => check if loaded
  const mrgAccs = yield select(state => state.mrgAccs);
  const isLoaded = mrgAccs.keys.some(name => (
    mrgAccs.models[name].account === trading.account
  ));
  if (isLoaded) { return; }
  // not loaded => start load
  const newMrgAccs = yield call(resources.load, trading.account);
  yield* applyKeysModels(newMrgAccs);
}

export default function* watchToInit() {
  while (1) {
    yield take(TRADING_TYPES.APPLY);
    yield initMrgAccs();
  }
}
