import { quoine } from '@quoine/resources';

const load = () => (
  quoine.post('/users/check_status', { useCache: false })
  .then(raw => ({
    tfa: !!raw.two_fa_type,
    app: raw.two_fa_type || '',
    phone: raw.phone || '',
  }))
);

export default { load };
