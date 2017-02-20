import {
  createBlotterWatch,
  ensureTradingAccount,
  ensureUserId,
  createApplyKeysModels,
  createApplyPattern,
} from '@quoine/states/utils';

import { TYPES as TRADING_TYPES } from 'states/trading';

import * as resources from './resources';
import TYPES from './TYPES';

function* getPayload() {
  const { currency, isFutures } = yield ensureTradingAccount();
  const userId = yield ensureUserId();
  const payload = { currency, isFutures, userId };
  return payload;
}

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: position => position.id,
  getState: state => state.positionBlotter,
  sort: true,
});

const positionBlotterSaga = createBlotterWatch({
  watchPattern: createApplyPattern(TRADING_TYPES, 'account'),
  TYPES,
  stateName: 'positionBlotter',
  // ===
  getPayload,
  applyKeysModels,
  resources,
});

export default positionBlotterSaga;
