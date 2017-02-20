import { spawn, call, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';
import { bitmex as resources } from '@quoine/resources';

import TYPES from './TYPES';

function* onActivate() {
  yield take(TYPES.ACTIVATE);
  yield apply(TYPES, { activating: true });
  try {
    yield call(resources.activate);
  } catch (e) { /* currently do nothing */ }
  window.location.reload();
}

export default function* futuresSaga() {
  let ok = true;
  try {
    yield call(resources.getReady);
  } catch (e) {
    ok = false;
  }
  yield apply(TYPES, { ok });

  // if not futures yet, watch activate action
  if (!ok) {
    yield spawn(onActivate);
  }
}
