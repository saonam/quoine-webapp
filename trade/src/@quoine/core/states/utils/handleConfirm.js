import { take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import { TYPES } from '@quoine/states/confirmations';

export default function* handleConfirm({ task, body }) {
  const { skips, activities } = yield select(states => states.confirmations);

  const activity = `${task}-confirm`;
  if (skips.indexOf(activity) !== -1) { return true; }

  // ask for confirm
  yield apply(TYPES, {
    activities: {
      ...activities,
      [activity]: body,
    },
  });
  const action = yield take(({ type, payload }) => (
    type === TYPES.SET_CONFIRMING && payload.task === task
  ));
  const { confirmed, skipChecked } = action.payload;

  // done confirming
  const skip = confirmed && skipChecked;
  yield apply(TYPES, {
    skips: skip ? skips.concat(activity) : skips,
    activities: {
      ...activities,
      [activity]: false,
    },
  });

  return confirmed;
}
