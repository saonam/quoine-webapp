import { quoine } from '@quoine/resources';
import normalize from './normalize';

const load = (account) => (
  quoine.get('/accounts?overview=true')
  .then(response => normalize(response, account))
);

export default { load };
