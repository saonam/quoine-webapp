import { spawn, call, take, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { apply, SYNC_TYPES } from '@quoine/states/utils';
import { changeLanguage } from '@quoine/translate';

import TYPES from './TYPES';
import * as resources from './resources';

function* setLanguage() {
  const state = yield select(states => states.languages);
  let current = state.current;
  if (state.all.indexOf(current) === -1) {
    current = state.all[0];
    yield apply(TYPES, { current });
  }

  // set to i18next
  yield apply(TYPES, { busy: true });
  // TODO: Download translation here
  changeLanguage(current);
  yield call(delay, 1000);
  yield apply(TYPES, { busy: false });

  // optionally set to remote
  try {
    yield call(resources.set, current);
  } catch (e) { /* do nothing */ }
}

function* watchSyncApply() {
  while (1) {
    yield take(SYNC_TYPES.APPLY);
    yield setLanguage();
  }
}

function* watchSetCurrent() {
  while (1) {
    const { payload } = yield take(TYPES.SET_CURRENT);
    yield apply(TYPES, { current: payload });
    yield setLanguage();
  }
}

export default function* languagesSaga() {
  yield [
    spawn(watchSyncApply),
    spawn(watchSetCurrent),
  ];
}
