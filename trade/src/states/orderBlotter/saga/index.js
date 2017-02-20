import {
  createBlotterWatch,
  ensureTradingAccount,
  ensureUserId,
  createApplyKeysModels,
  createApplyPattern,
} from '@quoine/states/utils';

import { TYPES as TRADING_TYPES } from 'states/trading';

import TYPES from '../TYPES';

import resources from './resources';

function* getPayload() {
  const { currency, isFutures } = yield ensureTradingAccount();
  const userId = yield ensureUserId();
  const payload = { currency, isFutures, userId };
  return payload;
}

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: order => order.id,
  getState: state => state.orderBlotter,
  sort: true,
});

const orderBlotterSaga = createBlotterWatch({
  watchPattern: createApplyPattern(TRADING_TYPES, 'account'),
  TYPES,
  stateName: 'orderBlotter',
  // ===
  getPayload,
  applyKeysModels,
  resources,
});

export default orderBlotterSaga;
