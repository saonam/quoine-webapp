import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  keys: [],
  models: {},
  busy: false,
  error: false,
  // ===
  removing: false,
};

export default createReducer(TYPES, initialState);
