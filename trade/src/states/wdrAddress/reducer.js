import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  account: 'BTC',
  // ===
  busy: true,
  current: 0,
  all: [],
  // ===
  adding: false,
  removing: false,
  verifying: false,
  // ===
  submitting: false,
  error: false,
  success: false,
};

export default createReducer(TYPES, initialState);
