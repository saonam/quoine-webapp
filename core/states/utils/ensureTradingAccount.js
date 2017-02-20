import { select, take } from 'redux-saga/effects';

export default function* ensureTradingAccount() {
  const currency = yield select(state => state.trading.account);
  let account = yield select(state => state.accounts.models[currency]);
  while (!account) {
    yield take();
    account = yield select(state => state.accounts.models[currency]);
  }
  return account;
}
