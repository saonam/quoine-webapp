import { quoine } from '@quoine/resources';
import normalize from './normalize';

const getUrl = (type) => (
  type === 'fiat' ? '/withdrawals' : '/crypto_withdrawals'
);

const load = ({ currency, type }) => {
  const url = `${getUrl(type)}?currency=${currency}&page=1`;
  const options = { useCache: false };
  return quoine.get(url, options)
    .then(raw => raw.models)
    .then(all => all.map(item =>
      normalize.response({ ...item, type })
    ));
};

const submit = (form) => {
  // validate crypto addresss
  if (process.env.REACT_APP_VENDOR === 'quoine') {
    if (form.type === 'crypto' && !form.address.value) {
      return Promise.reject({ message: 'withdrawal-error:address-is-requried' });
    }
    if (form.type === 'crypto' && form.address.status !== 'confirmed') {
      return Promise.reject({ message: 'withdrawal-error:address-need-to-be-verified' });
    }
  }

  // submit form
  const url = getUrl(form.type);
  const options = { body: normalize.body(form), errorPrefix: 'withdrawal' };
  return quoine.post(url, options)
    .then(raw =>
      normalize.response({ ...raw, type: form.type })
    );
};

const cancel = (wdr) => {
  const url = `${getUrl(wdr.type)}/${wdr.id}/cancel`;
  const options = { errorPrefix: 'withdrawal' };
  return quoine.put(url, options)
    .then(() =>
      normalize.response(wdr)
    );
};

export default { load, submit, cancel };
