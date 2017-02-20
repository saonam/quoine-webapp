import { take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from './TYPES';

export default function* saga() {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const action = yield take(TYPES.SET_PANEL);
    yield apply(TYPES, action.payload);
  }
}
