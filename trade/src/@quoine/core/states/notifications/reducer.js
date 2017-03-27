import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialState = {
  dismissed: [],
  items: [
    {
      id: 'disable-trading',
      styleName: 'negative',
    },
  ],
};

registerSyncShape('notifications', ['dismissed']);

export default createReducer(TYPES, initialState);
