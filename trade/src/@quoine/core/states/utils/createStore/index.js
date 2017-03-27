import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduceReducers from 'reduce-reducers';
import { spawn } from 'redux-saga/effects';

import {
  saga as syncSaga,
  reducer as syncReducer,
  TYPES as SYNC_TYPES,
  registerShape as registerSyncShape,
} from './sync';
// import log from './log';

const createStore = (states) => {
  // reducer
  const reducerObj = Object.keys(states)
    .reduce((obj, key) => ({
      ...obj,
      [key]: states[key].reducer,
    }), {});
  const normalReducer = combineReducers(reducerObj);
  const reducer = reduceReducers(syncReducer, normalReducer);

  // enhancer
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = applyMiddleware(
    sagaMiddleware,
    // log,
  );

  // store
  const store = reduxCreateStore(reducer, enhancer);

  // saga (saga must be run after store creation)
  function* sagas() {
    const array = Object.keys(states)
      .map(key => states[key].saga)
      .concat(syncSaga)
      .map(saga => spawn(saga));
    yield array;
  }
  sagaMiddleware.run(sagas);

  return store;
};

export default createStore;
export { SYNC_TYPES, registerSyncShape };
