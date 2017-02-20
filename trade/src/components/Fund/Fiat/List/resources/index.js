import { quoine } from '@quoine/resources';
import normalize from './normalize';

const getBaseUrl = (form) => (
  (
    form.account === 'JPY' && form.method === 'cash'
  ) ? '/fiat_fundings' : '/fund_infos'
);

const load = (form) => (
  quoine.get(`${getBaseUrl(form)}?currency=${form.account}&page=1`, {
    useCache: false,
  }).then(raw => normalize.all(raw, form))
);

export default { load };
