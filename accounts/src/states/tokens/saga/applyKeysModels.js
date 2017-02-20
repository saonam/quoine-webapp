import { createApplyKeysModels } from '@quoine/states/utils';

import TYPES from '../TYPES';

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: token => token.id,
  getState: state => state.tokens,
  sort: true,
});

export default applyKeysModels;
