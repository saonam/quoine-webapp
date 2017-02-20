import { spawn } from 'redux-saga/effects';

import watchForm from './watchForm';
import watchSubmit from './watchSubmit';

export default function* sagas() {
  yield [
    spawn(watchForm),
    spawn(watchSubmit),
  ];
}
