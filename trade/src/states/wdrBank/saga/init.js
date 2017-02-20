import { call } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import resources from '../resources';
import TYPES from '../TYPES';

export default function* init() {
  const all = yield call(resources.load);
  const current = (all[0] || {}).id || 0;
  yield apply(TYPES, { busy: false, current, all });
}
