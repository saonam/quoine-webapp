import { call, select, take } from 'redux-saga/effects';
import { apply, handleConfirm } from '@quoine/states/utils';

import resources from 'states/ips/resources';
import TYPES from '../TYPES';

function* onRemove(action) {
  const id = action.payload;

  const confirmed = yield handleConfirm({
    task: 'ips-remove', body: id,
  });
  if (!confirmed) { return; }

  yield apply(TYPES, { removing: id });
  try {
    yield call(resources.remove, id);

    // success
    const keys = yield select(state => state.ips.keys);
    yield apply(TYPES, {
      keys: keys.filter(key => key !== id),
      removing: false,
    });
  } catch (error) {
    yield apply(TYPES, {
      error: { ...error, id },
      removing: false,
    });
  }
}

function* watchRemove() {
  while (1) {
    const action = yield take(TYPES.REMOVE);
    yield onRemove(action);
  }
}

export default watchRemove;
