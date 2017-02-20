import { fork } from 'redux-saga/effects';
import { createWatchWebsocket } from '@quoine/states/utils';

import * as resources from '../resources';
import applyKeysModels from './applyKeysModels';

const watchWebsocket = createWatchWebsocket({
  resources, onUpdate: applyKeysModels,
});

export default function* subscribeTradeFeed(payload) {
  // must use fork to keep the relationship
  yield fork(watchWebsocket, payload);
}
