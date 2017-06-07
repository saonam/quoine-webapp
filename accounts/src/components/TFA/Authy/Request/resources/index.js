import { quoine } from '@quoine/resources';
import normalize from './normalize';

const request = (force) => (
  quoine.post('/authy/auth_token', {
    body: { force_sms: force },
    errorPrefix: 'tfa',
  }).then(normalize)
);

export default { request };
