import { quoine } from '@quoine/resources';
import * as normalize from './normalize';

export const loadAll = () => (
  quoine.get('/accounts?overview=true')
  .then(normalize.all)
);

export const loadDetail = ({ currency }) => (
  quoine.get(`/accounts/${currency}`)
  .then(normalize.detail)
);

export const add = (currency) => (
  quoine.post('/fiat_accounts', { body: { currency } })
  .then(normalize.add)
);

export const subscribe = ({ userId, currency }, onUpdate) => (
  quoine.subscribe(
    `user_${userId}_account_${currency.toLowerCase()}`,
    'updated',
    raw => onUpdate(normalize.detail(raw)),
  )
);
