import {
  createBlotterWatch,
  createApplyKeysModels,
  createApplyPattern,
} from '@quoine/states/utils';
import { ensureTradingProduct } from 'states/utils';

import { TYPES as TRADING_TYPES } from 'states/trading';

import * as resources from './resources';
import TYPES from './TYPES';

function* getPayload() {
  const { id: productId, symbol } = yield ensureTradingProduct();
  const payload = { productId, symbol };
  return payload;
}

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: execution => execution.id,
  getState: state => state.executionBlotter,
  sort: true,
});

const executionBlotterSaga = createBlotterWatch({
  watchPattern: createApplyPattern(TRADING_TYPES, 'product'),
  TYPES,
  stateName: 'executionBlotter',
  // ===
  getPayload,
  applyKeysModels,
  resources,
});

export default executionBlotterSaga;
