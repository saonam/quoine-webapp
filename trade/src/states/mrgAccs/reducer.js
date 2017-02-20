import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  keys: [],
  models: {},
  // ===
  adding: false,
  closing: false,
  // ===
  hiddens: [],
};

registerSyncShape('mrgAccs', ['hiddens']);

export default createReducer(TYPES, initialState);
