import { quoine } from '@quoine/resources';

import * as normalize from './normalize';

export const load = () => (
  quoine.get('/products').then(normalize.all)
);

export const subscribe = ({ symbol, id }, onUpdate) => (
  quoine.subscribe(
    `product_cash_${symbol.toLowerCase()}_${id}`,
    'updated',
    raw => onUpdate(normalize.one(raw)),
  )
);
