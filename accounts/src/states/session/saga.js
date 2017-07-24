import { takeLatest } from 'redux-saga/effects';

import TYPES from './TYPES';

function setToken(action) {
  const { token, tokenId } = action.payload;

  window.sessionStorage.setItem('tokenId', tokenId);
  window.sessionStorage.setItem('token', token);
  window.localStorage.setItem('signoutAction', 'none');
}

function* watchSetToken() {
  yield takeLatest(TYPES.SET_TOKEN, setToken);
}

export default function* sagas() {
  yield [
    watchSetToken(),
  ];
}
