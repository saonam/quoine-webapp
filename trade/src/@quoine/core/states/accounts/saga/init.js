import { call, spawn } from 'redux-saga/effects';
import { ensureUserId } from '@quoine/states/utils';

import * as resources from '../resources';

import applyKeysModels from './applyKeysModels';
import watchWebsocket from './watchWebsocket';

export default function* initAccounts() {
  // 1. load all accounts (mostly to have list of all accounts by currency)
  const accounts = yield call(resources.loadAll);
  // - actually, at this point, XBT account is added but don't have info
  // that's ok because in step 3 it will (subscribe)
  // - for a stricter approach, see sagas/products
  yield* applyKeysModels(accounts);

  // 2. load all accounts' details
  //    this is seperated from 1 for performance reason
  //    we want 1 to finish as soon as possible
  const details = yield accounts.map(account => {
    const { isFutures, currency } = account;
    return call(resources.loadDetail, { isFutures, currency });
  });
  yield* applyKeysModels(details);

  // 3. add pusher for each account
  // to add pusher, we need user id
  const userId = yield ensureUserId();
  yield accounts.map(account => {
    const payload = {
      currency: account.currency,
      isFutures: account.isFutures,
      userId,
    };
    return spawn(watchWebsocket, payload);
  });
}
