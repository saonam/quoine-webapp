import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  skips: [],
  activities: {},
};

registerSyncShape('confirmations', ['skips']);

export default createReducer(TYPES, initialState);
