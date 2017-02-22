import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

// Shape
// const initialState = {
//   prefs: ['order-add-confirm', 'order-add-report'],
//   activities: {
//     'order-add-confirm': {},
//     'order-add-report': {},
//   },
// };

const initialState = {
  skips: [],
  activities: {},
};

registerSyncShape('confirmations', ['skips']);

export default createReducer(TYPES, initialState);
