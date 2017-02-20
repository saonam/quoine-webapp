import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  ok: false,
  activating: false,
};

export default createReducer(TYPES, initialState);
