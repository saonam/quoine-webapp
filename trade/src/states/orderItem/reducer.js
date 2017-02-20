import { createReducer } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  cancel: false,
  edit: false,
  error: false,
};

export default createReducer(TYPES, initialState);
