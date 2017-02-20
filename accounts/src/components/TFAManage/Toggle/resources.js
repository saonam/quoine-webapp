import { quoine } from '@quoine/resources';

const enable = (code) => (
  quoine.get(`/authy/verify?auth_code=${code}`, {
    errorPrefix: 'tfa',
  })
);

const disable = (code) => (
  quoine.del(`/authy?auth_code=${code}`, {
    errorPrefix: 'tfa',
  })
);

export default { enable, disable };
