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
    side: 'all',
  },
  filtersSelects: {
    side: ['all', 'buy', 'sell'],
  },
};

registerSyncShape('executionBlotter', ['filters']);

export default createReducer(TYPES, initialState);
