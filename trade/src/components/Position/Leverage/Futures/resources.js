import { quoine } from '@quoine/resources';

const setLeverage = (product, leverage) => (
  quoine.post(
    `/futures/products/${product}/change_leverage`,
    { body: { leverage } }
  )
);

export default { setLeverage };
