import { select, fork, takeLatest } from 'redux-saga/effects';
import { createWatchWebsocket } from '@quoine/states/utils';
import { ensureTradingMrgAcc } from 'states/utils';
import { TYPES as TRADING_TYPES } from 'states/trading';

import * as resources from '../resources';
import applyKeysModels from './applyKeysModels';

const watchWebsocket = createWatchWebsocket({
  resources, onUpdate: applyKeysModels,
});

function* subscribeMrgAcc() {
  const trading = yield select(state => state.trading);
  // if not margin trading => skip
  if (trading.market !== 'margin') { return; }
  // if margin trading => subcribe
  const mrgAcc = yield ensureTradingMrgAcc();
  const { name, id } = mrgAcc;
  yield fork(watchWebsocket, { name, id });
}

export default function* watchToSubscribeMrgAcc() {
  yield takeLatest(TRADING_TYPES.APPLY, subscribeMrgAcc);
}
