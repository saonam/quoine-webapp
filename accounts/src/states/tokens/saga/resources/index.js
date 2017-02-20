import { quoine } from '@quoine/resources';
import normalize from './normalize';

const load = () => (
  quoine.get('/auth_tokens').then(normalize.all)
);

const add = (permissions) => (
  quoine.post('/auth_tokens', {
    body: {
      permissions: normalize.add(permissions),
    },
  }).then(normalize.one)
);

const remove = (id) => (
  quoine.del(`/auth_tokens/${id}`)
);

export default { load, add, remove };
