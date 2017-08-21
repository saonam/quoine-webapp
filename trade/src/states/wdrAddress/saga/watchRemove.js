import { call, select, take } from 'redux-saga/effects';
import { apply, handleConfirm } from '@quoine/states/utils';

import TYPES from '../TYPES';
import resources from '../resources';

function* onRemove(action) {
  const task = 'wdr-address-remove';
  const address = action.payload;

  // confirm
  const confirmed = yield handleConfirm({ task, body: address });
  if (!confirmed) { return; }

  // ready
  yield apply(TYPES, { removing: address });

  // go
  try {
    yield call(resources.remove, address.id);
    const prevAll = yield select(state => state.wdrAddress.all);
    const all = prevAll.filter(item => item.id !== address.id);
    const current = (all[0] || {}).id || 0;
    yield apply(TYPES, { current, all });
  } catch (error) {
    yield apply(TYPES, {
      error: { ...error, id: address.id },
    });
  }
  yield apply(TYPES, { removing: false });
}

export default function* watchRemove() {
  while (1) {
    const action = yield take(TYPES.REMOVE);
    yield onRemove(action);
  }
}
