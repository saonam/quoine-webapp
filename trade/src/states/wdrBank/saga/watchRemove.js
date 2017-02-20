import { call, select, take } from 'redux-saga/effects';
import { apply, handleConfirm } from '@quoine/states/utils';

import TYPES from '../TYPES';
import resources from '../resources';

function* onRemove(action) {
  const task = 'wdr-bank-remove';
  const bank = action.payload;

  // confirm
  const confirmed = yield handleConfirm({ task, body: bank });
  if (!confirmed) { return; }

  // ready
  yield apply(TYPES, { removing: bank });

  // go
  try {
    yield call(resources.remove, bank.id);
    const prevAll = yield select(state => state.wdrBank.all);
    const all = prevAll.filter(item => item.id !== bank.id);
    const current = (all[0] || {}).id || 0;
    yield apply(TYPES, { current, all });
  } catch (error) {
    yield apply(TYPES, {
      error: { ...error, id: bank.id },
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
