import { call, select, take } from 'redux-saga/effects';
import { apply, handleConfirm } from '@quoine/states/utils';

import TYPES from '../TYPES';
import resources from '../resources';

function* onCancel(action) {
  const task = 'withdrawal-cancel';
  const wdr = action.payload;

  // confirm
  const confirmed = yield handleConfirm({ task, body: wdr });
  if (!confirmed) { return; }

  // ready
  yield apply(TYPES, { submitting: wdr });

  // go
  try {
    yield call(resources.cancel, wdr);
    const prevAll = yield select(state => state.withdrawal.all);
    const all = prevAll.filter(child => child.id !== wdr.id);
    yield apply(TYPES, { all, submitting: false });
  } catch (error) {
    yield apply(TYPES, { error: { ...error, id: wdr.id } });
  }
}

export default function* watchCancel() {
  while (1) {
    const action = yield take(TYPES.CANCEL);
    yield onCancel(action);
  }
}
