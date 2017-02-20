import { spawn } from 'redux-saga/effects';

import watchToLoad from './watchToLoad';
import watchSubmit from './watchSubmit';
import watchCancel from './watchCancel';

export default function* wdrBankSaga() {
  yield [
    spawn(watchToLoad),
    spawn(watchSubmit),
    spawn(watchCancel),
  ];
}
