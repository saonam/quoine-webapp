import { quoine } from '@quoine/resources';
import normalize from './normalize';

const submit = (form) => (
  quoine.put('/users', {
    body: normalize(form),
    isForm: true,
    errorPrefix: 'user',
  }).then(raw => raw.status)
);

export default { submit };
