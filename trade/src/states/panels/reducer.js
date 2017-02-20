import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const maxGrows = [0, 0, 1, 1, 0, 0, 0, 0];
let constraints = maxGrows.map(maxGrow => ({ maxGrow }));
constraints = constraints.map(constraint => ({
  ...constraint,
  minOrder: 0,
  maxOrder: maxGrows.length - 1,
  minGrow: -1,
}));

const initialState = {
  prefs: [
    { order: 0, grow: 0 },
    { order: 1, grow: 0 },
    { order: 2, grow: 1 },
    { order: 3, grow: 0 },
    { order: 4, grow: -1 },
    { order: 5, grow: -1 },
    { order: 6, grow: -1 },
    { order: 7, grow: -1 },
  ],
  constraints,
};

registerSyncShape('panels', ['prefs']);

export default createReducer(TYPES, initialState);
