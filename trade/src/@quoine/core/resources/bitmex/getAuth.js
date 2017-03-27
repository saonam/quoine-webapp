import resources from '../quoine';

export default () => (
  resources.get('/futures/accounts/ws_auth')
  .then(raw => ({
    ok: true,
    apiKey: raw.api_key,
    nonce: raw.nonce,
    signature: raw.signature,
  })).catch(e => {
    if (e.status === 403) {
      return Promise.resolve({
        ok: false,
      });
    }
    throw e;
  })
);
