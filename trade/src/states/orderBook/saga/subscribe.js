import { fork } from 'redux-saga/effects';
import { apply, createWatchWebsocket } from '@quoine/states/utils';

import TYPES from '../TYPES';
import * as resources from '../resources';

function* onUpdate(orderBook) {
  yield apply(TYPES, orderBook);
}

const watchWebsocket = createWatchWebsocket({
  resources, onUpdate,
});

export default function* subscribeOrderBook(payload) {
  yield fork(watchWebsocket, payload);
}
