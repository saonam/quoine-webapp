import { createTYPES } from '@quoine/states/utils';

export default createTYPES('CONFIRMATIONS', [
  'TOGGLE',
  'SET_CONFIRMING',
  'SET_REPORTING',
]);
