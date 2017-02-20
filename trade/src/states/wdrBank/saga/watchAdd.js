import { call, select, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';
import resources from '../resources';

function* onAdd(action) {
  const bank = action.payload;
  const adding = { id: bank.id, action: 'add' };
  yield apply(TYPES, { adding, error: false, success: false });
  try {
    const newBank = yield call(resources.add, bank);
    const prevAll = yield select(state => state.wdrBank.all);
    const all = [newBank].concat(prevAll);
    yield apply(TYPES, { current: newBank.id, all, success: newBank });
  } catch (error) {
    yield apply(TYPES, { error });
  }
  yield apply(TYPES, { adding: false });
}

export default function* watchAdd() {
  while (1) {
    const action = yield take(TYPES.ADD);
    yield onAdd(action);
  }
}
