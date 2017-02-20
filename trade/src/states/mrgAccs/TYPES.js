import { createTYPES } from '@quoine/states/utils';

export default createTYPES('MRG_ACCS', [
  'CLOSE',
  'ADD',
  'TOGGLE_HIDDEN',
  // ===
  'TOGGLE_REPORT',
  'SET_REPORTING',
  // ===
  'TOGGLE_CONFIRM',
  'SET_CONFIRMING',
  // ===
  'SET_ERRORING',
]);
