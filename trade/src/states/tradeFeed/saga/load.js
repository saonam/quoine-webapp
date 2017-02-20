import { call } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import * as resources from '../resources';
import TYPES from '../TYPES';

import applyKeysModels from './applyKeysModels';

export default function* load(payload) {
  yield apply(TYPES, { busy: true, keys: [], models: [] });
  const feed = yield call(resources.load, payload);
  yield applyKeysModels(feed);
  yield apply(TYPES, { busy: false });
}
