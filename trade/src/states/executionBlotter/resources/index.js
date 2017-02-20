import { quoine } from '@quoine/resources';
import * as normalize from './normalize';

// `productId` will be `null` when `market` is `futures`
// Handle this case by resolve an empty result
// to prevent resources load fail (the reason cause `saga` stop watch)
export const load = ({ productId, symbol }, page) => (
  productId ? (
    quoine.get(
      `/executions/me?page=${page}&with_details=1&product_id=${productId}`,
      { useCache: false }
    ).then(response => normalize.all(response, symbol))
  ) : (
    Promise.resolve({ models: [], page: 1 })
  )
);

// fake subscribe to satisfy saga utils specs
export const subscribe = () => {};

// fake unsubscribe to satisfy saga utils specs
export const unsubscribe = () => {};
