import { quoine } from '@quoine/resources';

const submit = (type, quantity) => (
  quoine.post(`/futures/accounts/${
    type === 'fund' ? 'fund' : 'withdraw'
  }`, {
    body: { quantity },
  })
);

export default { submit };
