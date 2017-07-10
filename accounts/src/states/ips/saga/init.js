import { call } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import resources from 'states/ips/resources';
import TYPES from '../TYPES';

import applyKeysModels from './applyKeysModels';

function* initTokens() {
  yield apply(TYPES, { busy: true });
  try {
    const tokens = yield call(resources.load);
    yield* applyKeysModels(tokens);
  } catch (e) {
    // do nothing since this might failed because of 401
  }
  yield apply(TYPES, { busy: false });
}

export default initTokens;
