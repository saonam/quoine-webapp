import { createWatchUpdateWConfirm } from '@quoine/states/utils';
import { validateOrder as validate } from 'selectors/utils';

import TYPES from '../TYPES';

import handlers from './resources';

export default createWatchUpdateWConfirm({
  name: 'order',
  targetToType: {
    price: 'edit',
    quantity: 'edit',
    cancel: 'cancel',
  },
  TYPES,
  validate,
  handlers,
});
