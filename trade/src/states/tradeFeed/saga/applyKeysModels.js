/*
 * Here we will implement trade feed's version of applyKeysModels instead
 * of using createApplyKeysModels. Reason is that it is quite different
 * for performance reason
 */

import { select } from 'redux-saga/effects';
import { apply, getNextKeysModels } from '@quoine/states/utils';

import TYPES from '../TYPES';

// explicit declare these funcs first to keep the applyKeysModels format
// similar with the one created by createApplyKeysModels
const getKey = feed => feed.id;
const getState = state => state.tradeFeed;

export default function* applyKeysModels(payload) {
  // process keys and models
  const state = yield select(getState);
  const {
    keys: allKeys, models: allModels,
  } = getNextKeysModels({ state, payload, getKey });
  // only keeps 20 latest models (=> sort desc)
  // the following will mutate allKeys but that's ok here
  const keys = allKeys.sort((a, b) => (b - a)).slice(0, 10);
  // create new models to allow allow Garbage Collector collect
  // the allModels
  const models = keys.reduce((map, key) => {
    // it's ok to mutate here
    // eslint-disable-next-line no-param-reassign
    map[key] = allModels[key];
    return map;
  }, {});
  yield apply(TYPES, { keys, models });
}
