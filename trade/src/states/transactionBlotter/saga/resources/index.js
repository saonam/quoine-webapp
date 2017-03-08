import { quoine } from '@quoine/resources';
import normalize from './normalize';

// `group` is for Lending App
// export const load = ({ account, group, page }) => (
//   Promise.all([
//     resources.get('/accounts'),
//     resources.get(`/transactions?currency=${account}&page=${page}
// ${group ? `&transaction_group=${group}` : ''}`),
//   ]).then(response => normalize(account, response))
// );

const load = (currency, page) => (
  Promise.all([
    // this will be cache
    // we need to use this instead of selector so
    // we can have many important props (like direction)
    // to use with collection
    quoine.get(`/accounts/${currency}`),
    quoine.get(`/transactions?currency=${currency}&page=${page}`, {
      useCache: false,
    }),
  ]).then(response => {
    const [account, raw] = response;
    return normalize(raw, account);
  }).catch(() => ({
    models: [],
    page: Infinity,
  }))
);

// fake subscribe to satisfy sagas utils specs
const subscribe = () => {};

// fake unsubscribe to satisfy sagas utils specs
const unsubscribe = () => {};

export default { load, subscribe, unsubscribe };
