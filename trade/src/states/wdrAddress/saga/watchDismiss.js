import { take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';

function* onDimiss() {
  yield apply(TYPES, {
    adding: false,
    removing: false,
    verifying: false,
    // ===
    submitting: false,
    error: false,
    success: false,
  });
}

export default function* watchAdd() {
  while (1) {
    const action = yield take(TYPES.DISMISS);
    yield onDimiss(action);
  }
}
