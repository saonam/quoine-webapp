import { select, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from './TYPES';

export default function* chartsSaga() {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    yield take(TYPES.TOGGLE_DOUBLE);
    const double = yield select(state => state.charts.double);
    yield apply(TYPES, { double: !double });
  }
}
