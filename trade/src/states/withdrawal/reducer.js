import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  busy: true,
  all: [],
  // ===
  submitting: false,
  error: false,
  success: false,
};

export default createReducer(TYPES, initialState);
