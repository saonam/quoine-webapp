import { createWatchUpdateWConfirm } from '@quoine/states/utils';
import { validatePosition as validate } from 'selectors/utils';

import TYPES from '../TYPES';

import handlers from './resources';

export default createWatchUpdateWConfirm({
  name: 'position',
  targetToType: {
    stopLoss: 'edit',
    takeProfit: 'edit',
    quantityClose: 'close',
    claim: 'claim',
  },
  TYPES,
  validate,
  handlers,
});
