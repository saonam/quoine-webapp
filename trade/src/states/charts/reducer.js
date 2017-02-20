import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  double: false,
};

export default createReducer(TYPES, initialState);
