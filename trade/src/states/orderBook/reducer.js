import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  busy: true,
  buys: [],
  sells: [],
};

export default createReducer(TYPES, initialState);
