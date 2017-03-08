import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  // self storing account
  account: '',
  // ===
  keys: [],
  models: {},
  busy: true,
  page: 0,
  // ===
  filters: {
    // type: 'all',
    direction: 'all',
  },
  filtersSelects: {
    // type: ['all', 'bought', 'sold'],
    direction: ['all', 'in', 'out'],
  },
};

export default createReducer(TYPES, initialState);
