import { select, call, take, spawn } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';
import * as resources from '../resources';

import applyKeysModels from './applyKeysModels';
import watchWebsocket from './watchWebsocket';

function* onAdd(action) {
  yield apply(TYPES, { adding: true });

  const account = yield call(resources.add, action.payload);
  yield* applyKeysModels(account);

  // subscribe pusher
  // it is pretty sure that at this time, userId is available
  // thus we don't need to check if exist and wait like in "init"
  const userId = yield select(state => state.user.id);
  const payload = {
    currency: account.currency,
    isFutures: account.isFutures,
    userId,
  };
  yield spawn(watchWebsocket, payload);

  yield apply(TYPES, { adding: false });
}

export default function* watchAdd() {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const action = yield take(TYPES.ADD);
    yield onAdd(action);
  }
}
