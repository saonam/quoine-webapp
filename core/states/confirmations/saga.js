import { spawn, take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from './TYPES';

function* watchToggle() {
  while (true) {
    const action = yield take(TYPES.TOGGLE);
    const { task, side } = action.payload;
    const prefs = yield select(state => state.confirmations.prefs);
    yield apply(TYPES, {
      prefs: {
        ...prefs,
        [task]: {
          ...prefs[task],
          [side]: !prefs[task][side],
        },
      },
    });
  }
}

function* confirmationsSaga() {
  yield [
    spawn(watchToggle),
  ];
}

export default confirmationsSaga;
