import { quoine } from '@quoine/resources';

// only for account INR has transfer type
const load = (type) => (
  quoine.get(`/bank_accounts/inr_${type}_options`)
  .then(raw => raw.option)
);

export default { load };
