import { call } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import * as resources from '../resources';
import TYPES from '../TYPES';

export default function* load(payload) {
  yield apply(TYPES, { busy: true, buys: [], sells: [] });
  const book = yield call(resources.load, payload);
  yield apply(TYPES, {
    ...book,
    busy: false,
  });
}
