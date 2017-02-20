import { take, select } from 'redux-saga/effects';
import { apply, SYNC_TYPES } from '@quoine/states/utils';

import TYPES from '../TYPES';

import { validateAccount, validateProduct } from './validate';

const getSync = (action) => {
  const { trading, current } = action.payload;
  if (trading) { return trading; }
  // !trading
  if (current) {
    const { account, market, product } = current;
    return { account, market, product };
  }
  // !current
  return null;
};

const getTrading = (sync, current) => (
  ['account', 'market', 'product']
  .reduce((trd, key) => (
    sync[key] === current[key] ? trd : ({
      ...trd, [key]: sync[key],
    })
  ), {})
);

function* tradingWatchSync() {
  while (true) {
    const action = yield take(SYNC_TYPES.APPLY);
    const sync = getSync(action);
    if (!sync) { return; }

    const current = yield select(states => states.trading);
    const trading = getTrading(sync, current);

    if (Object.keys(trading).length === 0) { return; }

    yield apply(TYPES, trading);
    yield* validateAccount();
    yield* validateProduct();
  }
}

export default tradingWatchSync;
