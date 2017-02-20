import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  close: false,
  claim: false,
  edit: false,
  error: false,
};

export default createReducer(TYPES, initialState);
