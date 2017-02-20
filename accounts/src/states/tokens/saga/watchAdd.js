import { call, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';

import resources from './resources';

import applyKeysModels from './applyKeysModels';

function* onAdd(action) {
  const permisions = action.payload;
  yield apply(TYPES, { adding: true });

  const token = yield call(resources.add, permisions);
  yield* applyKeysModels(token);

  yield apply(TYPES, { adding: false });
}

function* watchAdd() {
  while (1) {
    const action = yield take(TYPES.ADD);
    yield onAdd(action);
  }
}

export default watchAdd;
