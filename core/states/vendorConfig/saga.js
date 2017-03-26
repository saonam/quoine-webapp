import { call } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from './TYPES';
import * as resources from './resources';

export default function* vendorConfigSaga() {
  const vendorConfig = yield call(resources.load);
  yield apply(TYPES, vendorConfig);
}
