import { createTYPES } from '@quoine/states/utils';

export default createTYPES('WITHDRAWAL', [
  'LOAD',
  'SUBMIT',
  'CANCEL',
]);
