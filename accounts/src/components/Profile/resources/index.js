import { quoine } from '@quoine/resources';
import normalize from './normalize';

const load = () => (
  quoine.post('/users/check_status', { useCache: false })
  .then(normalize)
);

export default { load };
