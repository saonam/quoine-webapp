import { take, spawn, select } from 'redux-saga/effects';
import { apply, createApplyPattern, SYNC_TYPES } from '@quoine/states/utils';

import { TYPES as ACCOUNTS_TYPES } from '@quoine/states/accounts';
import { TYPES as CURRENCIES_TYPES } from '@quoine/states/currencies';
import { TYPES as PRODUCTS_TYPES } from 'states/products';
import { TYPES as MRG_ACCS_TYPES } from 'states/mrgAccs';

import TYPES from '../TYPES';

import { validateAccount, validateProduct } from './validate';

function* watchSetMarket() {
  while (true) {
    const action = yield take(TYPES.SET_MARKET);
    yield apply(TYPES, { market: action.payload });
    yield* validateAccount();
    yield* validateProduct();
  }
}

function* watchSetAccount() {
  while (true) {
    const action = yield take(TYPES.SET_ACCOUNT);
    yield apply(TYPES, { account: action.payload });
    yield* validateProduct();
  }
}

function* watchSetProduct() {
  while (true) {
    const action = yield take(TYPES.SET_PRODUCT);
    yield apply(TYPES, { product: action.payload });
  }
}

function* watchAccountRelated() {
  while (true) {
    yield take([
      createApplyPattern(ACCOUNTS_TYPES, 'keys'),
      createApplyPattern(CURRENCIES_TYPES, 'keys'),
    ]);
    yield* validateAccount();
  }
}

function* watchProductRelated() {
  while (true) {
    yield take([
      createApplyPattern(PRODUCTS_TYPES, 'keys'),
      createApplyPattern(MRG_ACCS_TYPES, 'keys'),
    ]);
    yield* validateProduct();
  }
}

function* watchSync() {
  while (true) {
    yield take(SYNC_TYPES.APPLY);
    // fire again so other saga (order book, trade feed, etc...)
    // can listen to
    const state = yield select(states => states.trading);
    yield apply(TYPES, state);

    yield* validateAccount();
    yield* validateProduct();
  }
}

export default function* tradingSaga() {
  yield [
    spawn(watchProductRelated),
    spawn(watchAccountRelated),
    spawn(watchSetProduct),
    spawn(watchSetAccount),
    spawn(watchSetMarket),
    spawn(watchSync),
  ];
}
