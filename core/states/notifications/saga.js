import { take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from './TYPES';

export default function* notificationsSaga() {
  while (1) {
    const { payload: id } = yield take(TYPES.DISMISS);
    const prevDismissed = yield select(state => state.notifications.dismissed);
    const dismissed = prevDismissed.concat(id);
    yield apply(TYPES, { dismissed });
  }
}
