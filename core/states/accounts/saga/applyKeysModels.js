import { createApplyKeysModels } from '@quoine/states/utils';

import TYPES from '../TYPES';

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: account => account.currency,
  getState: state => state.accounts,
});

export default applyKeysModels;
