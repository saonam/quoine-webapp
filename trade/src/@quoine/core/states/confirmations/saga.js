import { spawn, take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from './TYPES';

function* watchRemoveSkip() {
  while (true) {
    const action = yield take(TYPES.REMOVE_SKIP);
    const task = action.payload;
    const skips = yield select(state => state.confirmations.skips);
    yield apply(TYPES, {
      skips: skips.filter(item => item !== task),
    });
  }
}

function* confirmationsSaga() {
  yield [
    spawn(watchRemoveSkip),
  ];
}

export default confirmationsSaga;
