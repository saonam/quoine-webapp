import { call, spawn } from 'redux-saga/effects';
import {
  createWatchWebsocket, createApplyKeysModels,
} from '@quoine/states/utils';

import * as resources from './resources';
import TYPES from './TYPES';

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: product => product.symbol,
  getState: state => state.products,
});

const watchWebsocket = createWatchWebsocket({
  resources, onUpdate: applyKeysModels,
});

export default function* productsSaga() {
  // 1. load all products
  const products = yield call(resources.load);
  // but wait, bitmex products might not be available (settled, unlisted...)
  // therefore, we only dispatch quoine products to reducer here
  const cashProducts = products.filter(product => !product.isFutures);
  yield* applyKeysModels(cashProducts);
  // 2. add pusher for each product
  // bitmex products, if available, will be added in this step
  yield products.map(product => {
    const { symbol, id, isFutures } = product;
    return spawn(watchWebsocket, { symbol, id, isFutures });
  });
}
