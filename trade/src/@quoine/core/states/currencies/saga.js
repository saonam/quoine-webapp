import { call } from 'redux-saga/effects';
import { createApplyKeysModels } from '@quoine/states/utils';

import * as resources from './resources';

import TYPES from './TYPES';

const applyKeysModels = createApplyKeysModels({
  TYPES,
  getKey: currency => currency.code,
  getState: state => state.currencies,
});

export default function* sagas() {
  const [all, funding] = yield [
    call(resources.loadAll),
    call(resources.loadFunding),
  ];
  const currencies = all.map(currency => ({
    ...currency,
    isFunding: funding.indexOf(currency.code) !== -1,
  }));
  yield* applyKeysModels(currencies);
}
