import { spawn, take, select } from 'redux-saga/effects';
import { apply, SYNC_TYPES } from '@quoine/states/utils';

import TYPES from './TYPES';

function* watchSyncApply() {
  while (1) {
    yield take(SYNC_TYPES.APPLY);
    const { current, all } = yield select(state => state.themes);
    if (all.indexOf(current) === -1) {
      yield apply(TYPES, { current: all[0] });
    }
  }
}

function* watchSetCurrent() {
  while (1) {
    const { payload } = yield take(TYPES.SET_CURRENT);
    yield apply(TYPES, { current: payload });
  }
}

export default function* themesSaga() {
  yield [
    spawn(watchSyncApply),
    spawn(watchSetCurrent),
  ];
}
