import resources from '../_gate/quoine';
import normalize from './normalize';

const load = () => (
  resources.post('/users/check_status').then(normalize)
);

export default { load };
