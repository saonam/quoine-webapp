import { quoine } from '@quoine/resources';

const load = (account) => (
  quoine.post('/users/check_status', { useCache: true })
    .then(raw => raw.recent_addresses)
    .then(all => all[account])
);

export default { load };
