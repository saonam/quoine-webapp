import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialCurrent = (
  window.navigator.language ||
  window.navigator.userLanguage ||
  'en'
).slice(0, 2);

const initialState = {
  all: ['ja', 'en', 'zhcn', 'zhtw'],
  current: initialCurrent,
  busy: true,
};

registerSyncShape('languages', ['current']);

export default createReducer(TYPES, initialState);
