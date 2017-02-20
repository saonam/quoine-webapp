import { take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import { TYPES } from '@quoine/states/confirmations';

export default function* handleConfirm({ task, body }) {
  const { prefs, activities } = yield select(states => states.confirmations);
  if (!prefs[task].confirm) { return true; }

  // ask for confirm
  yield apply(TYPES, {
    activities: {
      ...activities,
      [task]: { ...activities[task], confirming: body },
    },
  });
  const action = yield take(({ type, payload }) => (
    type === TYPES.SET_CONFIRMING && payload.task === task
  ));
  const { confirmed, skipChecked } = action.payload;

  // done confirming
  const nextConfirm = !(confirmed && skipChecked);
  yield apply(TYPES, {
    activities: {
      ...activities,
      [task]: { ...activities[task], confirming: false },
    },
    prefs: {
      ...prefs,
      [task]: { ...prefs[task], confirm: nextConfirm },
    },
  });

  return confirmed;
}
