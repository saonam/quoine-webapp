import { select, call, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';
import * as resources from '../resources';

import applyKeysModels from './applyKeysModels';

function* onAdd(action) {
  const product = action.payload;
  yield apply(TYPES, { adding: product });

  const account = yield select(state => state.trading.account);
  const productId = yield select(
    state => state.products.models[product].id
  );
  const mrgAcc = yield call(resources.add, { account, productId });

  yield* applyKeysModels(mrgAcc);
  yield apply(TYPES, { adding: '' });
}

export default function* watchAdd() {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const action = yield take(TYPES.ADD);
    yield onAdd(action);
  }
}
