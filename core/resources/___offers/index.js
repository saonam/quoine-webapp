import resources from '../_gate/quoine';
import normalize from './normalize';

const load = ({ account, page }) => (
  resources.get(`/loan_bids?currency=${account}&page=${page}`)
  .then(normalize.all)
);

const close = (id) => (
  resources.put(`/loan_bids/${id}/close`)
  .then(normalize.one)
);

const create = (data) => (
  resources.post('/loan_bids', normalize.body(data))
  .then(normalize.one)
);

export default { load, close, create };
