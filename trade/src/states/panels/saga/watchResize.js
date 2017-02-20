import { take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';

function* onResize(action) {
  // ready
  const { index, side } = action.payload;
  const { prefs, constraints } = yield select(states => states.panels);
  const { grow: currentGrow } = prefs[index];
  const { minGrow, maxGrow } = constraints[index];

  // set
  const targetGrow = currentGrow + (side === 'expand' ? 1 : -1);
  if (minGrow <= targetGrow && targetGrow <= maxGrow) {
    // go
    const nextPrefs = prefs.slice(0);
    nextPrefs[index] = { ...nextPrefs[index], grow: targetGrow };
    // validate: there must be atleast one panel with grow > 0
    if (nextPrefs.every(pref => pref.grow < 1)) {
      // find one that can be set to grow 1
      const toGrowIndex = nextPrefs.findIndex(
        (pref, i) => (constraints[i].maxGrow > 0 && i !== index)
      );
      nextPrefs[toGrowIndex] = { ...nextPrefs[toGrowIndex], grow: 1 };
    }
    yield apply(TYPES, { prefs: nextPrefs });
  }
}

export default function* watchResize() {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const action = yield take(TYPES.RESIZE);
    yield onResize(action);
  }
}
