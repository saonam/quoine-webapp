import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  busy: true,
  buys: [],
  sells: [],
  mode: 'normal',
};

registerSyncShape('orderBook', ['mode']);

export default createReducer(TYPES, initialState);
