import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  keys: [],
  models: {},
};

export default createReducer(TYPES, initialState);
