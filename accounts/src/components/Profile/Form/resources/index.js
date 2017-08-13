import { quoine } from '@quoine/resources';
import normalize from './normalize';

const submit = (form) => (
  quoine.put('/users', {
    body: normalize(form),
    isForm: true,
    errorPrefix: 'user',
  }).then(raw => {
    if (raw.status) {
      return raw.status.replace(/_/g, '-');
    }
    return raw.status;
  })
);

export default { submit };
