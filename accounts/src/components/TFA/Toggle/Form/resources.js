import { quoine } from '@quoine/resources';

// app: ['authy', 'ga']

const enable = ({ app, code }) => (
  quoine.get(`/${app}/verify?auth_code=${code}`, {
    errorPrefix: 'tfa-manage',
  })
);

const disable = ({ app, code }) => (
  quoine.del(`/${app}?auth_code=${code}`, {
    errorPrefix: 'tfa-manage',
  })
);

export default { enable, disable };
