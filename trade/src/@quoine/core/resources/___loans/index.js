import resources from '../_gate/quoine';
import normalize from './normalize';
import users from '../users';

const load = ({ account, page }) => (
  Promise.all([
    resources.get(`/loans?currency=${account}&page=${page}`),
    getUserId()
  ])
  .then(response => (
    normalize.all({
      raw: response[0],
      userId: response[1],
    })
  ))
);

const reinvest = (id, value) => (
  Promise.all([
    resources.put(`/loans/${id}`, normalize.reinvest(value)),
    users.getId(),
  ])
  .then(response => (
    normalize.one({
      raw: response[0],
      userId: response[1],
    })
  ))
);

export default { load, reinvest };
