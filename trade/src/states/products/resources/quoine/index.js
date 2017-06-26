import { quoine } from '@quoine/resources';

import * as normalize from './normalize';

export const load = () => (
  quoine.get('/products?with_rate=true').then(normalize.all)
);

export const subscribe = ({ symbol, id }, onUpdate) => (
  quoine.subscribe(
    `product_cash_${symbol.toLowerCase()}_${id}`,
    'updated',
    raw => {
      const data = normalize.one(raw);
      delete data.feeTaker;
      delete data.feeMaker;
      onUpdate(data);
    },
  )
);
