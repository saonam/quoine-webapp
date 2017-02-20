import { select, take } from 'redux-saga/effects';
import { TYPES } from '@quoine/states/user';

export default function* ensureUserId() {
  let userId = yield select(state => state.user.id);
  while (!userId) {
    // if user id is not existed, we will wait and check again
    yield take(TYPES.APPLY);
    userId = yield select(state => state.user.id);
  }
  return userId;
}
