import { call, select, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';
import resources from '../resources';

function* onEdit(action) {
  const bank = action.payload;
  const submitting = { id: bank.id, action: 'edit' };
  yield apply(TYPES, { submitting });
  try {
    // Update in this case is
    // + remove old bank account,
    // + then add new bank account
    const newBank = yield call(resources.edit, bank);
    const prevAll = yield select(state => state.wdrBank.all);
    const all = prevAll
      .filter(item => item.id !== bank.id)
      .concat(newBank);
    yield apply(TYPES, { current: newBank.id, all, success: newBank });
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
