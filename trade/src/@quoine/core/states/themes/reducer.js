import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const THEMES_BY_VENDOR = {
  quoine: ['light', 'dark-2', 'green', 'finance', 'dark'],
  qryptos: ['yellow'],
  zabit: ['purple'],
  traders: ['traders-light', 'traders-dark', 'green'],
};

const all = THEMES_BY_VENDOR[process.env.REACT_APP_VENDOR];
const current = all[0];

const initialState = { all, current };

registerSyncShape('themes', ['current']);

export default createReducer(TYPES, initialState);
