import { quoine } from '@quoine/resources';
import normalize from './normalize';

// eslint-disable-next-line import/prefer-default-export
export const load = () => (
  quoine.get('/ir_ladders').then(normalize)
);
