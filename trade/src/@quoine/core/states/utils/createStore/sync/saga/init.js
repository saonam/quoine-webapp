import { call, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';

import * as resources from './resources';
import { setBase } from './scheduleSet';
import migrate from './migrate';

// always yield sync
function* syncSagaApply(orgSync) {
  const sync = migrate(orgSync);

  setBase(sync);

  const current = yield select();
  const next = Object.keys(current).reduce(
    (prev, key) => ({
      ...prev,
      [key]: {
        ...current[key],
        ...sync[key],
      },
    }), {},
  );

  yield apply(TYPES, next);
}

export default function* syncSagaInit() {
  // 1. find state from local storage first
  // WARNING: temporary disable localStorage to avoid sync between
  // different user
  // TODO: find a better way
  // const local = JSON.parse(window.localStorage.getItem('sync-state'));
  // yield syncSagaApply(local);
  // 2. then load settings from remote
  try {
    // this might failed because of 401
    const remote = yield call(resources.get);
    yield syncSagaApply(remote);
  } catch (e) {
    // let's say it null because we don't have local sync anymore
    yield syncSagaApply(null);
  }
}
