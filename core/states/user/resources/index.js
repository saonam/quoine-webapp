import { quoine } from '@quoine/resources';
import normalize from './normalize';

const load = () => (
  quoine.post('/users/check_status', { useCache: true })
  .then(normalize)
);

export default { load };
