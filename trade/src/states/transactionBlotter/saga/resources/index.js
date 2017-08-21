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

const load = ({ currency }, page) => (
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
    return normalize.all(raw, account);
  }).catch(() => ({
    models: [],
    page: Infinity,
  }))
);

const subscribe = ({ currency, userId }, onUpdate) => {
  quoine.get(`/accounts/${currency}`).then(account => {
    quoine.subscribe(
      `user_${userId}_account_${currency.toLowerCase()}_transactions`,
      'updated',
      (raw) => onUpdate(normalize.one(raw, account))
    );
  });
};

const unsubscribe = ({ currency, userId }) => {
  quoine.unsubscribe(
    `user_${userId}_account_${currency.toLowerCase()}_transactions`,
    'updated'
  );
};

export default { load, subscribe, unsubscribe };
