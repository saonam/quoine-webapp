import { quoine } from '@quoine/resources';

import * as normalize from './normalize';

export default ({ account, productId }) => (
  quoine.post('/trading_accounts', {
    body: {
      trading_account: {
        funding_currency: account,
        product_id: productId,
      },
    },
  }).then(normalize.one)
);
