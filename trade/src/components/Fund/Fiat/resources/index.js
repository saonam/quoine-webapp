import { quoine } from '@quoine/resources';
import normalize from './normalize';

const checkCash = () => (
  quoine.get('/fiat_fundings?currency=JPY')
  .then(() => true)
  .catch(() => false)
);

const getUrl = (form) => (
  (
    form.account === 'JPY' && form.method === 'cash'
  ) ? '/fiat_fundings' : '/fund_infos'
);

const submit = (form) => (
  quoine.post(getUrl(form), {
    body: normalize.body(form),
  }).then(raw =>
    normalize.response(raw, form)
  )
);

export default { submit, checkCash };
