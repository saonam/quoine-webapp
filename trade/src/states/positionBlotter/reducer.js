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
    status: ['all', 'open', 'closed'],
    side: ['all', 'long', 'short'],
  },
};

registerSyncShape('positionBlotter', ['filters']);

export default createReducer(TYPES, initialState);
