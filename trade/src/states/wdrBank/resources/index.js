import { quoine } from '@quoine/resources';
import normalizeResponse from 'components/BankDetail/normalize';
import normalizeBody from './normalize';

const load = () => (
  quoine.get('/bank_accounts', {
    useCache: false,
  }).then(raw => raw.models.map(normalizeResponse))
);

const add = (form) => (
  quoine.post('/bank_accounts', {
    body: normalizeBody(form),
    isForm: true,
    errorPrefix: 'bank',
  }).then(normalizeResponse)
);

const edit = (form) => (
  quoine.put(`/bank_accounts/${form.id}`, {
    body: normalizeBody(form),
    isForm: true,
    errorPrefix: 'bank',
  }).then(normalizeResponse)
);

const remove = (id) => (
  quoine.del(`/bank_accounts/${id}`, {
    errorPrefix: 'bank',
  })
);

export default { load, add, edit, remove };
