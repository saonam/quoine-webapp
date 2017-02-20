import { createApplyKeysModels } from '@quoine/states/utils';

import TYPES from '../TYPES';

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: mrgAcc => mrgAcc.name,
  getState: state => state.mrgAccs,
});

export default applyKeysModels;
