import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

// inside each models has the prop isFunding
const initialState = {
  keys: [],
  models: {},
};

export default createReducer(TYPES, initialState);
