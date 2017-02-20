import { call, select, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';
import resources from '../resources';

function* onSubmit(action) {
  yield apply(TYPES, { submitting: { action: 'submit' } });
  try {
    const form = action.payload;
    const response = yield call(resources.submit, form);
    const prevAll = yield select(state => state.withdrawal.all);
    const all = [response].concat(prevAll);
    yield apply(TYPES, { all, success: response, error: false });
  } catch (error) {
    yield apply(TYPES, { error: { ...error, action: 'submit' } });
  }
  yield apply(TYPES, { submitting: false });
}

export default function* watchSubmit() {
  while (1) {
    const action = yield take(TYPES.SUBMIT);
    yield onSubmit(action);
  }
}
