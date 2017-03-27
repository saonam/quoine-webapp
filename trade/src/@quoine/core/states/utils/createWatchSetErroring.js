import { take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

const createWatchSetErroring = (TYPES) => (
  function* watchSetErroring() {
    // eslint-disable-next-line no-constant-condition
    while (1) {
      yield take(TYPES.SET_ERRORING);
      yield apply(TYPES, { erroring: {} });
    }
  }
);

export default createWatchSetErroring;
