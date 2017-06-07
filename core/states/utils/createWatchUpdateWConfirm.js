import { select, take, call } from 'redux-saga/effects';
import { apply, handleConfirm } from '@quoine/states/utils';

const createWatchUpdateWConfirm = (options) => {
  const { name, TYPES, validate, handlers, targetToType } = options;

  function* onUpdate({ payload }) {
    const taskType = targetToType[payload.target];
    const task = `${name}-${taskType}`;

    // confirm
    const confirmed = yield handleConfirm({ task, body: payload });
    if (!confirmed) { return; }

    // ready
    const model = yield select(state => ({
      ...state[`${name}Blotter`].models[payload.id],
      [payload.target]: Number([payload.value]),
    }));

    // validate
    const validation = yield select(state => validate(model, state, payload.target));
    if (validation) {
      yield apply(TYPES, {
        error: { ...payload, message: validation },
      });
      return;
    }

    // go
    yield apply(TYPES, { [taskType]: payload });
    try {
      yield call(handlers[taskType], payload, model);
    } catch (e) {
      yield apply(TYPES, {
        error: { ...payload, message: e.message },
      });
    }

    // done
    yield apply(TYPES, { [taskType]: false });
  }

  function* watchUpdate() {
    while (1) {
      const action = yield take(TYPES.UPDATE);
      yield onUpdate(action);
    }
  }

  return watchUpdate;
};

export default createWatchUpdateWConfirm;
