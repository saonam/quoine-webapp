import { select, take } from 'redux-saga/effects';
import { TYPES } from 'states/products';

export default function* ensureTradingProduct() {
  const symbol = yield select(state => state.trading.product);
  let product = yield select(state => state.products.models[symbol]);
  while (!product) {
    yield take(TYPES.APPLY);
    product = yield select(state => state.products.models[symbol]);
  }
  return product;
}
