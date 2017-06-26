import { takeLatest } from 'redux-saga/effects';

import TYPES from './TYPES';

import validateUrl from './validateUrl';

function setToken(action) {
  const { token, tokenId, continueURL } = action.payload;

  window.sessionStorage.setItem('tokenId', tokenId);
  window.sessionStorage.setItem('token', token);
  window.localStorage.setItem('signoutAction', 'none');
  window.location.href = validateUrl(continueURL);
}

function* watchSetToken() {
  yield takeLatest(TYPES.SET_TOKEN, setToken);
}

export default function* sagas() {
  yield [
    watchSetToken(),
  ];
}
