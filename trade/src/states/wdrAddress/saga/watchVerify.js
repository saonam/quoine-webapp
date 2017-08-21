import { call, take, select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import getWdrAddress from 'selectors/getWdrAddress';

import TYPES from '../TYPES';
import resources from '../resources';

function* onVerify(action) {
  yield apply(TYPES, { submitting: 'verify' });

  try {
    const address = yield select(getWdrAddress);
    const response = yield call(resources.verify, {
      address, token: action.payload,
    });

    const all = yield select(state => state.wdrAddress.all);
    const index = all.findIndex(item => item.id === address.id);
    const nextAll = all.slice();
    nextAll[index] = response;

    yield apply(TYPES, { all: nextAll, success: true });
  } catch (error) {
    yield apply(TYPES, { error });
  }

  yield apply(TYPES, { submitting: false });
}

export default function* watchAdd() {
  while (1) {
    const action = yield take(TYPES.VERIFY);
    yield onVerify(action);
  }
}
