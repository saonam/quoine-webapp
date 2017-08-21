import { call, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import resources from '../resources';
import TYPES from '../TYPES';

function* onAccountChange(action) {
  const account = action.payload;
  yield apply(TYPES, { busy: true });
  yield apply(TYPES, { account });
  const all = yield call(resources.load, account);
  const current = (all[0] || {}).id || 0;
  yield apply(TYPES, { busy: false, current, all });
}

export default function* watchAccountChange() {
  while (1) {
    const action = yield take(TYPES.ACCOUNT_CHANGE);
    yield onAccountChange(action);
  }
}
