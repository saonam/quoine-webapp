import { createWatchWebsocket } from '@quoine/states/utils';

import * as resources from '../resources';

import applyKeysModels from './applyKeysModels';

const watchWebsocket = createWatchWebsocket({
  resources, onUpdate: applyKeysModels,
});

export default watchWebsocket;
