import { call, select, take } from 'redux-saga/effects';
import { apply, handleConfirm, handleReport } from '@quoine/states/utils';

import TYPES from '../TYPES';
import * as resources from '../resources';

function* onClose(action) {
  const task = 'mrg-acc-close';
  const { name, side } = action.payload;

  // confirm
  const confirmed = yield handleConfirm({ task, body: side });
  if (!confirmed) { return; }

  // ready
  yield apply(TYPES, { closing: `${name}${side}` });
  const mrgAcc = yield select(states => states.mrgAccs.models[name]);
  const product = yield select(
    states => states.products.models[mrgAcc.product]
  );

  // go
  const response = yield call(resources.close, {
    account: mrgAcc.account,
    productId: product.id,
    side,
  });

  // done
  yield apply(TYPES, { closing: false });
  yield handleReport({ task, body: response });
}

export default function* watchClose() {
  while (1) {
    const action = yield take(TYPES.CLOSE);
    yield onClose(action);
  }
}
