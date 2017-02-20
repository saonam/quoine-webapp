import { take, call } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import resources from '../resources';
import TYPES from '../TYPES';

function* onLoad(action) {
  yield apply(TYPES, { busy: true });
  const { currency, type } = action.payload;
  const all = yield call(resources.load, { currency, type });
  yield apply(TYPES, { busy: false, all });
}

export default function* watchToLoad() {
  while (1) {
    const action = yield take(TYPES.LOAD);
    yield onLoad(action);
  }
}
