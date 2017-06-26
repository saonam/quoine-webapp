import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

// const providers = ['crypto-watch', 'trading-view'];

const initialState = {
  double: false,
  provider: 'crypto-watch',
};

registerSyncShape('charts', ['double']);

export default createReducer(TYPES, initialState);
