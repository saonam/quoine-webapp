import { call, select, take } from 'redux-saga/effects';
import { apply, handleConfirm, handleReport } from '@quoine/states/utils';
import getForm from 'selectors/getOrderEntryForm';

import TYPES from '../TYPES';
import * as resources from '../resources';

function* onSubmit(action) {
  const task = 'order-add';
  const side = action.payload;

  // confirm
  const confirmed = yield handleConfirm({ task, body: side });
  if (!confirmed) { return; }

  // ready
  yield apply(TYPES, { submitting: side });
  const formRaw = yield select(getForm);
  // reassign for sure (because this can be active without mouse hover)
  const form = { ...formRaw, side };

  // go
  try {
    const response = yield call(resources.submit, form);
    yield handleReport({ task, body: response });
  } catch (error) {
    yield apply(TYPES, { error });
  }
  yield apply(TYPES, { submitting: '' });
}

export default function* watchSubmit() {
  while (1) {
    const action = yield take(TYPES.SUBMIT);
    yield onSubmit(action);
  }
}
