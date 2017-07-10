import { quoine } from '@quoine/resources';
import normalize from './normalize';

const load = () => (
  quoine.get('/whitelist_ips').then(normalize.all)
);

const add = ({ ip, code }) => (
  quoine.post('/whitelist_ips', {
    body: {
      ip,
      auth_code: code,
    },
    errorPrefix: 'ip',
  }).then(normalize.add)
);

const remove = (id) => (
  quoine.del(`/whitelist_ips/${id}`, {
    errorPrefix: 'ip',
  })
);

export default { load, add, remove };
