import { put } from 'redux-saga/effects';

export default function* apply(TYPES, payload) {
  yield put({ type: TYPES.APPLY, payload });
}
