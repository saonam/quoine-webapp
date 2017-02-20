import { takeLatest } from 'redux-saga/effects';

import TYPES from './TYPES';

function setToken(action) {
  window.sessionStorage.setItem('tokenId', action.payload.tokenId);
  window.sessionStorage.setItem('token', action.payload.token);
  // ===
  const continueURL = action.payload.continueURL ||
    process.env.REACT_APP_TRADE_HOST;
  window.location.href = continueURL;
}

function* watchSetToken() {
  yield takeLatest(TYPES.SET_TOKEN, setToken);
}

export default function* sagas() {
  yield [
    watchSetToken(),
  ];
}
