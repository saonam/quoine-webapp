import { select } from 'redux-saga/effects';
import {
  ensureUserId,
  createBlotterWatch,
  createApplyKeysModels,
  createApplyPattern,
} from '@quoine/states/utils';

import resources from './resources';
import TYPES from '../TYPES';

function* getPayload() {
  const currency = yield select(state => state.transactionBlotter.account);
  const userId = yield ensureUserId();
  return { currency, userId };
}

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: trans => trans.id,
  getState: state => state.transactionBlotter,
  sort: true,
});

const blotterWatch = createBlotterWatch({
  watchPattern: createApplyPattern(TYPES, 'account'),
  TYPES,
  stateName: 'transactionBlotter',
  // ===
  getPayload,
  applyKeysModels,
  resources,
});

export default blotterWatch;
