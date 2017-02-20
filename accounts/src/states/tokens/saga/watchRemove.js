import { call, select, take } from 'redux-saga/effects';
import { apply, handleConfirm } from '@quoine/states/utils';

import TYPES from '../TYPES';

import resources from './resources';

function* onRemove(action) {
  const id = action.payload;

  const confirmed = yield handleConfirm({
    task: 'tokens-remove', body: id,
  });
  if (!confirmed) { return; }

  yield apply(TYPES, { removing: id });
  yield call(resources.remove, id);

  // success
  const keys = yield select(state => state.tokens.keys);
  yield apply(TYPES, {
    keys: keys.filter(key => key !== id),
    removing: false,
  });
}

function* watchRemove() {
  while (1) {
    const action = yield take(TYPES.REMOVE);
    yield onRemove(action);
  }
}

export default watchRemove;
