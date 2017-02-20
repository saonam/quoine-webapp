import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  keys: [],
  hiddens: [],
  models: {},
  adding: '',
};

registerSyncShape('accounts', ['hiddens']);

export default createReducer(TYPES, initialState);
