import { quoine } from '@quoine/resources';
import normalize from './normalize';

// eslint-disable-next-line import/prefer-default-export
export const load = () => (
  quoine.post('/users/check_status', { useCache: true })
  .then(normalize)
);
