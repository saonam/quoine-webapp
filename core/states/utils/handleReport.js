import { take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import { TYPES } from '@quoine/states/confirmations';

export default function* handleReport({ task, body }) {
  const { prefs, activities } = yield select(states => states.confirmations);
  if (!prefs[task].report) { return; }

  // showing report
  yield apply(TYPES, {
    activities: {
      ...activities,
      [task]: { ...activities[task], reporting: body },
    },
  });
  const action = yield take(({ type, payload }) => (
    type === TYPES.SET_REPORTING && payload.task === task
  ));
  const { skipChecked } = action.payload;

  // done
  const nextReport = !skipChecked;
  yield apply(TYPES, {
    activities: {
      ...activities,
      [task]: { ...activities[task], reporting: false },
    },
    prefs: {
      ...prefs,
      [task]: { ...prefs[task], report: nextReport },
    },
  });
}
