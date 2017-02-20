import { fork, takeLatest } from 'redux-saga/effects';
import { ensureTradingProduct } from 'states/utils';
import { createApplyPattern } from '@quoine/states/utils';

import { TYPES as TRADING_TYPES } from 'states/trading';

import load from './load';
import subscribe from './subscribe';

function* initOrderBook() {
  const product = yield ensureTradingProduct();
  const { isFutures, id, symbol } = product;
  const payload = { isFutures, symbol, id };
  yield [
    fork(load, payload),
    fork(subscribe, payload),
  ];
}

export default function* orderBookSaga() {
  const pattern = createApplyPattern(TRADING_TYPES, 'product');
  yield takeLatest(pattern, initOrderBook);
}
