import resources from '../_gate/quoine';
import normalize from './normalize';

const load = (currency) => (
  resources.get(`/ir_ladders/interest_rate_ladders?currency=${currency}`)
  .then(normalize)
);

export default { load };
