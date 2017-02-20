import { quoine } from '@quoine/resources';

const submit = (phone) => (
  quoine.post('/authy', {
    body: { phone },
  }).then(response => response.phone)
);

export default { submit };
