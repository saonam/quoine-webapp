import { quoine } from '@quoine/resources';

const load = () => (
  quoine.get('/currencies')
  .then(raw => raw.reduce(
    (prev, info) => ({
      ...prev,
      [info.currency]: {
        minimum: Number(info.minimum_withdrawal) || 0,
        fee: Number(info.withdrawal_fee) || 0,
        feeMinimum: Number(info.minimum_fee) || 0,
      },
    }), {}
  ))
);

export default { load };
