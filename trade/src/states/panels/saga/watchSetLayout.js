import { take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';

const layouts = {
  alpha: [
    { order: 0, grow: 0 },
    { order: 1, grow: 0 },
    { order: 2, grow: 1 },
    { order: 3, grow: 0 },
    { order: 4, grow: -1 },
    { order: 5, grow: -1 },
    { order: 6, grow: -1 },
    { order: 7, grow: -1 },
  ],
  beta: [
    { order: 0, grow: 0 },
    { order: 1, grow: 0 },
    { order: 2, grow: 0 },
    { order: 3, grow: 1 },
    { order: 4, grow: -1 },
    { order: 5, grow: -1 },
    { order: 6, grow: -1 },
    { order: 7, grow: -1 },
  ],
  gamma: [
    { order: 0, grow: 0 },
    { order: 3, grow: 0 },
    { order: 1, grow: -1 },
    { order: 2, grow: 1 },
    { order: 4, grow: -1 },
    { order: 5, grow: -1 },
    { order: 6, grow: -1 },
    { order: 7, grow: -1 },
  ],
};

function* onSetLayout(action) {
  // ready
  const prefs = layouts[action.payload];
  yield apply(TYPES, { prefs });
}

export default function* watchSetLayout() {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const action = yield take(TYPES.SET_LAYOUT);
    yield onSetLayout(action);
  }
}
