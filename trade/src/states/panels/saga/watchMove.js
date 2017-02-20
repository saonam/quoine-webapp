import { take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';

function* onMove(action) {
  // ready
  const { index, side } = action.payload;
  const { prefs } = yield select(states => states.panels);

  // set
  const currentOrder = prefs[index].order;
  const targetOrder = currentOrder + (side === 'right' ? 1 : -1);
  // find if this target is already in use
  // this also mean the target is valid (so no need to validate)
  // "oldIndex" means the index of the panel that hold our target order
  const oldIndex = prefs.findIndex(
    panel => panel.order === targetOrder
  );
  if (oldIndex !== -1) {
    const nextPrefs = prefs.slice(0);
    nextPrefs[oldIndex] = { ...prefs[oldIndex], order: currentOrder };
    nextPrefs[index] = { ...prefs[index], order: targetOrder };
    yield apply(TYPES, { prefs: nextPrefs });
  }
}

export default function* watchMove() {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const action = yield take(TYPES.MOVE);
    yield onMove(action);
  }
}
