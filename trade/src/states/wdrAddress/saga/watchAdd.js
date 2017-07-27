import { call, select, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';
import resources from '../resources';

function* onAdd(action) {
  yield apply(TYPES, { submitting: 'add' });

  const account = yield select(state => state.wdrAddress.account);
  const form = {
    ...action.payload,
    account,
  };

  try {
    const newAddress = yield call(resources.add, form);
    const prevAll = yield select(state => state.wdrAddress.all);
    const all = [newAddress].concat(prevAll);
    yield apply(TYPES, {
      current: newAddress.id, all, adding: false, verifying: true, error: false,
    });
  } catch (error) {
    yield apply(TYPES, { error });
  }

  yield apply(TYPES, { submitting: false });
}

export default function* watchAdd() {
  while (1) {
    const action = yield take(TYPES.ADD);
    yield onAdd(action);
  }
}
