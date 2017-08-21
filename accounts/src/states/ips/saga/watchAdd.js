import { take } from 'redux-saga/effects';

import TYPES from '../TYPES';

import applyKeysModels from './applyKeysModels';

function* watchAddIp() {
  while (1) {
    const action = yield take(TYPES.ADD);
    yield* applyKeysModels(action.payload);
  }
}

export default watchAddIp;
