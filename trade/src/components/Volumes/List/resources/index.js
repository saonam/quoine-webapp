import { quoine } from '@quoine/resources';
import normalize from './normalize';

const load = (frm, to) => (
  quoine.get(`/accounts/transacted_volumes${
    frm === '' && to === '' ? '' : '?'
  }${
    frm === '' ? '' : `&from=${new Date(frm * 1000).toISOString()}`
  }${
    to === '' ? '' : `&to=${new Date(to * 1000).toISOString()}`
  }`)
  .then(normalize)
);

export default { load };
