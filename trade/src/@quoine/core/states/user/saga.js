import { call } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from './TYPES';
import resources from './resources';

export default function* saga() {
  try {
    const user = yield call(resources.load);
    yield apply(TYPES, user);
  } catch (e) {
    // do nothing since user might failed in case of 401
    // (accounts page)
  }
}
