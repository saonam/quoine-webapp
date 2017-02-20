import resources from '@quoine/resources/quoine';
import normalize from 'components/BankDetail/normalize';

const load = (account) => (
  resources.get(`/banks?currency=${account}`)
  .then(banks => banks.map(normalize))
);

export default { load };
