import { quoine } from '@quoine/resources';
import normalize from './normalize';

const load = (account) => (
  quoine.get(`/crypto_withdrawal_addresses?currency=${account}`, {
    useCache: false,
  }).then(raw => raw.models.map(normalize.response))
);

const add = (form) => (
  quoine.post('/crypto_withdrawal_addresses', {
    body: normalize.body(form),
    errorPrefix: 'wdr-address',
  }).then(normalize.response)
);

const edit = (form) => (
  quoine.put('/crypto_withdrawal_addresses', {
    body: normalize.body(form),
    errorPrefix: 'wdr-address',
  }).then(normalize.response)
);

const remove = (id) => (
  quoine.del(`/crypto_withdrawal_addresses/${id}`, {
    errorPrefix: 'wdr-address',
  })
);

const verify = ({ address, token }) => (
  quoine.post(`/crypto_withdrawal_addresses/${address.id}/verify`, {
    body: { confirmation_token: token },
    errorPrefix: 'wdr-address',
  }).then(() => ({
    ...address,
    status: 'confirmed',
  }))
);
export default { load, add, edit, remove, verify };
