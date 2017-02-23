import { quoine } from '@quoine/resources';
import normalize from './normalize';

const emailRequest = ({ userId }) => (
  quoine.get(`/users/${userId}/auth_code`, {
    useCache: false,
    errorPrefix: 'tfa',
  })
);

const authyRequest = ({ force, payload }) => (
  quoine.post('/authy/auth_token', {
    body: {
      ...payload,
      force_sms: force,
    },
    errorPrefix: 'tfa',
  })
);

const request = (options) => (
  (options.useEmail ? emailRequest : authyRequest)(options)
    .then(normalize)
);

export default { request };
