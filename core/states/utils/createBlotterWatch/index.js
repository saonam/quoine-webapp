import { spawn, fork, takeLatest } from 'redux-saga/effects';
import { createWatchSetFilter } from '@quoine/states/utils';

import { reload, watchLoad } from './load';
import subscribe from './subscribe';

const createBlotterWatch = (options) => {
  // ===
  function* init() {
    const payload = yield options.getPayload();
    yield reload(payload, options);
    yield [
      fork(subscribe, payload, options),
      fork(watchLoad, payload, options),
    ];
  }
  function* watchToInit() {
    yield takeLatest(options.watchPattern, init);
  }
  // ===
  const watchSetFilter = createWatchSetFilter({
    TYPES: options.TYPES,
    stateName: options.stateName,
  });
  // ===
  function* blotterWatch() {
    yield [
      spawn(watchToInit),
      spawn(watchSetFilter),
    ];
  }
  return blotterWatch;
};

export default createBlotterWatch;
