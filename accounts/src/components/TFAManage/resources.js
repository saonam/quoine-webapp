import { quoine } from '@quoine/resources';

const load = () => (
  quoine.post('/users/check_status', { useCache: false })
  .then(user => ({
    phone: user.phone,
    enabled: user.phone_verified,
  }))
);

export default { load };
