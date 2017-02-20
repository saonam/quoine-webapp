import throttle from 'lodash.throttle';
import { quoine } from '@quoine/resources';

import normalize from './normalize';

export const load = ({ id }, onUpdate) => (
  quoine.get(`/products/${id}/price_levels`, {
    useCache: false,
  })
  .then(normalize.load)
  .then(onUpdate)
);

// price_ladders_cash_btcusd_sell
const sides = ['sell', 'buy'];

export const subscribe = ({ symbol }, onUpdate) => (
  sides.forEach(side => quoine.subscribe(
    `price_ladders_cash_${symbol.toLowerCase()}_${side}`,
    'updated',
    throttle(raw => onUpdate(normalize.update(raw, side)), 500)
  ))
);

export const unsubscribe = ({ symbol }) => (
  sides.forEach(side => quoine.unsubscribe(
    `price_ladders_cash_${symbol.toLowerCase()}_${side}`,
    'updated'
  ))
);
