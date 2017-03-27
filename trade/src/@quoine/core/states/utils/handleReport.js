import { take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import { TYPES } from '@quoine/states/confirmations';

export default function* handleReport({ task, body }) {
  const { skips, activities } = yield select(states => states.confirmations);

  const activity = `${task}-report`;
  if (skips.indexOf(activity) !== -1) { return; }

  // showing report
  yield apply(TYPES, {
    activities: {
      ...activities,
      [activity]: body,
    },
  });
  const action = yield take(({ type, payload }) => (
    type === TYPES.SET_REPORTING && payload.task === task
  ));
  const { skipChecked } = action.payload;

  // done
  yield apply(TYPES, {
    skips: skipChecked ? skips.concat(activity) : skips,
    activities: {
      ...activities,
      [activity]: false,
    },
  });
}
