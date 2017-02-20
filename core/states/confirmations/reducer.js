import { createReducer, registerSyncShape } from '@quoine/states/utils';

import TYPES from './TYPES';

const TASKS = [
  'order-add',
  // ===
  'order-cancel',
  'order-edit',
  // ===
  'position-claim',
  'position-close',
  'position-edit',
  // ===
  'mrg-acc-close',
  // ===
  'tokens-remove',
  // ===
  'wdr-bank-remove',
  'withdrawal-cancel',
];

const initialState = TASKS.reduce((prev, task) => ({
  prefs: {
    ...prev.prefs,
    [task]: { confirm: true, report: true },
  },
  activities: {
    ...prev.activities,
    [task]: { confirming: false, reporting: false },
  },
}), {
  prefs: {}, activities: {},
});

registerSyncShape('confirmations', ['prefs']);

export default createReducer(TYPES, initialState);
