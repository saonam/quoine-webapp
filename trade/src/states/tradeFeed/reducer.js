import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  busy: true,
  keys: [],
  models: {},
};

export default createReducer(TYPES, initialState);
