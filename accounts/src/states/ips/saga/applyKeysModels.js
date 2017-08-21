import { createApplyKeysModels } from '@quoine/states/utils';

import TYPES from '../TYPES';

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: ip => ip.id,
  getState: state => state.ips,
  sort: true,
});

export default applyKeysModels;
