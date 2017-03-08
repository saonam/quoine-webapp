import { spawn, take } from 'redux-saga/effects';
import { apply, createApplyPattern } from '@quoine/states/utils';

import { TYPES as TRADING_TYPES } from 'states/trading';

import TYPES from '../TYPES';

function* watchSelf() {
  while (true) {
    const action = yield take(TYPES.SET_ACCOUNT);
    yield apply(TYPES, { account: action.payload });
  }
}

function* watchTrading() {
  while (true) {
    const action = yield take(
      createApplyPattern(TRADING_TYPES, 'account')
    );
    yield apply(TYPES, { account: action.payload.account });
  }
}

export default function* watchSetAccount() {
  yield [
    spawn(watchSelf),
    spawn(watchTrading),
  ];
}
