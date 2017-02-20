import { call, select, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

function* load(payload, options, isReload) {
  const { TYPES, resources, applyKeysModels, stateName } = options;

  const initState = isReload ? ({
    busy: true,
    keys: [],
    models: [],
    page: 0,
  }) : ({
    busy: true,
  });
  yield apply(TYPES, initState);

  const page = yield select(state => state[stateName].page);
  if (!isFinite(page)) { return; }

  const response = yield call(resources.load, payload, page + 1);

  yield applyKeysModels(response.models);
  yield apply(TYPES, { busy: false, page: response.page });
}

export function* watchLoad(payload, options) {
  while (1) {
    yield take(options.TYPES.LOAD);
    yield load(payload, options, false);
  }
}

export function* reload(payload, options) {
  yield load(payload, options, true);
}
