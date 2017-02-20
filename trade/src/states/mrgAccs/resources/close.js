import { quoine } from '@quoine/resources';

import * as normalize from './normalize';

export default ({ account, side, productId }) => {
  const body = (!side || side === 'both') ? {} : { side };
  const url = '/trades/close_all?' +
    `funding_currency=${account}&product_id=${productId}`;
  return quoine.put(url, { body }).then(normalize.close);
};
