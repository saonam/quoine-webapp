import { call, select, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';
import resources from '../resources';

function* onEdit(action) {
  const crypto = action.payload;
  const submitting = 'edit';
  yield apply(TYPES, { submitting, error: false, success: false });
  try {
    const newCrypto = yield call(resources.edit, crypto);
    const prevAll = yield select(state => state.wdrAddress.all);
    const all = prevAll
      .filter(item => item.id !== crypto.id)
      .concat(newCrypto);
    yield apply(TYPES, { current: newCrypto.id, all, success: newCrypto });
  } catch (error) {
    yield apply(TYPES, { error });
  }
  yield apply(TYPES, { submitting: false });
}

export default function* watchEdit() {
  while (1) {
    const action = yield take(TYPES.EDIT);
    yield onEdit(action);
  }
}
