import { call, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import resources from '../resources';
import TYPES from '../TYPES';

export default function* init() {
  const account = yield select(state => state.wdrAddress.account);
  const all = yield call(resources.load, account);
  const current = (all[0] || {}).id || 0;
  yield apply(TYPES, { busy: false, current, all });
}
