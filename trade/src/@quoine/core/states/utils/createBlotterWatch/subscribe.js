import { fork } from 'redux-saga/effects';
import { createWatchWebsocket } from '@quoine/states/utils';

export default function* subscribe(payload, options) {
  const { resources, applyKeysModels } = options;
  const watchWebsocket = createWatchWebsocket({
    resources, onUpdate: applyKeysModels,
  });
  // must use fork to keep the relationship
  yield fork(watchWebsocket, payload);
}
