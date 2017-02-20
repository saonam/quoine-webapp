import { quoine } from '@quoine/resources';
import * as normalize from './normalize';

// eslint-disable-next-line import/prefer-default-export
export const submit = ({ isFutures, ...order }) => {
  const path = isFutures ?
    `/futures/products/${order.product}/orders` : '/orders';
  const name = isFutures ? 'futures' : 'cash';
  const normalizeBody = normalize[`${name}Body`];
  const normalizeResponse = normalize[`${name}Response`];

  return quoine.post(path, {
    body: normalizeBody(order),
    errorPrefix: 'order',
  }).then((raw) => {
    const result = normalizeResponse(raw);
    return result;
  });
};
