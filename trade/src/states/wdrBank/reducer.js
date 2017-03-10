import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  busy: true,
  current: 0,
  all: [],
  // ===
  removing: false,
  // ===
  adding: false,
  editting: false,
  submitting: false,
  // ===
  error: false,
  success: false,
};

export default createReducer(TYPES, initialState);
