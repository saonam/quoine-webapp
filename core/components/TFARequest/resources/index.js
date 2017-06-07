import { quoine } from '@quoine/resources';
import normalize from './normalize';

const request = ({ force, payload }) => (
  quoine.post('/users/auth_code', {
    body: {
      ...payload,
      force_sms: force,
    },
    errorPrefix: 'tfa',
  })
  .then(normalize)
);

export default { request };
