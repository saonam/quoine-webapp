import { spawn } from 'redux-saga/effects';

import watchSetAccount from './watchSetAccount';
import blotterWatch from './blotterWatch';

export default function* tradingSaga() {
  yield [
    spawn(watchSetAccount),
    spawn(blotterWatch),
  ];
}
