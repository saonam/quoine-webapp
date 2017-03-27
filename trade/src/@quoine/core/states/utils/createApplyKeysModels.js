import { select } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

export const getNextKeysModels = ({ state, payload, getKey }) => {
  let { keys, models } = state;

  // make sure to work on an array
  [].concat(payload).forEach((model) => {
    const key = getKey(model);
    // add to "keys" if not existed
    if (keys.indexOf(key) === -1) {
      keys = keys.concat(key);
    }
    // always add to models
    models = {
      ...models,
      // assign with the current model since the updated model might
      // only be partial (not a complete one)
      [key]: {
        ...models[key],
        ...model,
      },
    };
  });

  // return
  return { keys, models };
};

const reverseCompare = (a, b) => (b - a);

const createApplyKeysModels = ({ TYPES, getKey, getState, sort }) => (
  function* applyKeysModels(payload) {
    const state = yield select(getState);
    const { keys, models } = getNextKeysModels({ state, payload, getKey });
    const nextState = { models };
    if (state.keys !== keys) {
      if (sort) {
        // default is reverse sort
        keys.sort(reverseCompare);
      }
      nextState.keys = keys;
    }
    yield apply(TYPES, nextState);
  }
);

export default createApplyKeysModels;
