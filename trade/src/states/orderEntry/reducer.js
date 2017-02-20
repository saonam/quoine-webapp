import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  form: {
    type: 'market',
    quantity: '1',
    quantityDisclose: '1',
    price: '1',
    side: 'buy',
    // margin
    leverage: 2,
    direction: 'one-direction',
    // slippage
    slippage: false,
    slippageValue: '100',
    // trailing stop
    distance: '50',
    distanceType: 'fiat',
  },
  // ===
  submitting: '',
  error: false,
};

registerSyncShape('orderEntry', ['form']);

export default createReducer(TYPES, initialState);
