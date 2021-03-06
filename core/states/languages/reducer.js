import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const initialCurrent = (
  window.navigator.language ||
  window.navigator.userLanguage ||
  'en'
).slice(0, 2);

const langs = process.env.REACT_APP_VENDOR === 'qryptos' ? ['en', 'zhcn', 'zhtw'] : ['ja', 'en'];

const initialState = {
  all: langs,
  current: initialCurrent,
  busy: true,
};

registerSyncShape('languages', ['current']);

export default createReducer(TYPES, initialState);
