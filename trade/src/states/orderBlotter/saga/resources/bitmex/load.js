import { quoine } from '@quoine/resources';
import { load as loadProducts } from 'states/products/resources/bitmex';

import normalize from './normalize';

const loadByProduct = (symbol) => (
  quoine.get(`/futures/products/${symbol}/orders`)
);

const load = () => (
  loadProducts()
  .then(products => products.map(product => product.symbol))
  .then(symbols => Promise.all(symbols.map(loadByProduct)))
  .then(normalize.load)
);

export default load;
