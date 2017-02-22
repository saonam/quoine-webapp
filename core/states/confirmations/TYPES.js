import { createTYPES } from '@quoine/states/utils';

export default createTYPES('CONFIRMATIONS', [
  'REMOVE_SKIP',
  'SET_CONFIRMING',
  'SET_REPORTING',
]);
