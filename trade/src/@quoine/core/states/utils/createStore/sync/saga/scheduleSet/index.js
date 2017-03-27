import { select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import get, { setBase, registerShape } from './get';
import set from './set';

function* syncSagascheduleSet() {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    yield call(delay, 5000);
    const states = yield select(get);
    set(states);
  }
}

export { setBase, registerShape };
export default syncSagascheduleSet;
