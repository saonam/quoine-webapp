import { quoine } from '@quoine/resources';

const enable = (code) => (
  quoine.get(`/authy/verify?auth_code=${code}`, {
    errorPrefix: 'tfa-manage',
  })
);

const disable = (code) => (
  quoine.del(`/authy?auth_code=${code}`, {
    errorPrefix: 'tfa-manage',
  })
);

export default { enable, disable };
