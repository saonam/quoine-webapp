import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  // pagination
  keys: [],
  models: {},
  busy: true,
  page: 0,
  // ===
  filters: {
    status: 'all',
    side: 'all',
  },
  filtersSelects: {
    status: ['all', 'live', 'cancelled', 'filled'],
    side: ['all', 'buy', 'sell'],
  },
};

registerSyncShape('orderBlotter', ['filters']);

export default createReducer(TYPES, initialState);
